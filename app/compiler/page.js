"use client";

import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';

export default function Compiler() {
  const [html, setHtml] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>Compile All</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      line-height: 1.6;
    }
    h1 {
      color: #4f46e5;
    }
  </style>
</head>
<body>
  <h1>Hello, Compile All!</h1>
  <p>Selamat datang di compiler online dengan bantuan AI.</p>
  <div id="output"></div>
  
  <script>
    document.getElementById('output').textContent = 'Kode JavaScript berjalan!';
  </script>
</body>
</html>`);

  const [css, setCss] = useState(`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.btn {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
}

.btn:hover {
  background-color: #4338ca;
}`);
  
  const [js, setJs] = useState(`console.log('JavaScript berjalan!');
document.addEventListener('DOMContentLoaded', function() {
  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = 'Klik Saya';
  button.addEventListener('click', function() {
    alert('Tombol diklik!');
  });
  
  const container = document.querySelector('.container');
  if (container) {
    container.appendChild(button);
  }
});`);

  const [output, setOutput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiHistory, setAiHistory] = useState([]);
  const iframeRef = useRef(null);
  const aiResponseRef = useRef(null);

  // Fungsi untuk menjalankan kode
  const runCode = () => {
    if (!iframeRef.current) return;
    
    try {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (!iframeDoc) {
        console.warn('Cannot access iframe document');
        return;
      }
      
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>
              try {
                ${js}
              } catch (error) {
                console.error('Error di kode JavaScript:', error);
                document.body.innerHTML += '<div style="color: red; margin-top: 20px;">Error: ' + error.message + '</div>';
              }
            <\/script>
          </body>
        </html>
      `);
      iframeDoc.close();
    } catch (error) {
      console.warn('Error accessing iframe:', error.message);
    }
  };

  // Fungsi untuk mengirim pertanyaan ke Groq AI
  const sendToAi = async () => {
    if (!aiQuery.trim()) {
      setAiResponse('Harap masukkan pertanyaan terlebih dahulu.');
      return;
    }
    
    setAiLoading(true);
    setAiResponse('');
    
    try {
      const response = await fetch('/api/groq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: aiQuery,
          html,
          css,
          js
        }),
      });
      
      const data = await response.json();
      
      if (data.error) {
        setAiResponse(`Error: ${data.error}`);
      } else {
        const newResponse = {
          query: aiQuery,
          response: data.response,
          timestamp: new Date().toISOString()
        };
        
        setAiHistory(prev => [newResponse, ...prev.slice(0, 9)]);
        setAiResponse(data.response);
        
        // Simpan ke localStorage untuk persistensi sederhana
        if (typeof window !== 'undefined') {
          localStorage.setItem('aiHistory', JSON.stringify([newResponse, ...aiHistory.slice(0, 9)]));
        }
      }
    } catch (error) {
      setAiResponse(`Error: ${error.message}`);
    } finally {
      setAiLoading(false);
      setAiQuery('');
      
      // Scroll ke respons AI
      setTimeout(() => {
        aiResponseRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Fungsi untuk mengganti kode dari AI
  const applyAiSuggestion = (suggestion) => {
    // Coba ekstrak bagian kode dari respons AI
    const codeBlocks = suggestion.match(/```([a-z]*)\n([\s\S]*?)\n```/g);
    
    if (codeBlocks && codeBlocks.length > 0) {
      let hasAppliedCode = false;
      
      codeBlocks.forEach(block => {
        const languageMatch = block.match(/```([a-z]*)/);
        const codeMatch = block.match(/```[a-z]*\n([\s\S]*?)\n```/);
        
        if (languageMatch && codeMatch && codeMatch[1]) {
          const language = languageMatch[1].toLowerCase();
          const code = codeMatch[1].trim();
          
          // Terapkan kode berdasarkan bahasa
          if (language === 'html' || language === 'htm') {
            setHtml(code);
            hasAppliedCode = true;
          } else if (language === 'css') {
            setCss(code);
            hasAppliedCode = true;
          } else if (language === 'js' || language === 'javascript') {
            setJs(code);
            hasAppliedCode = true;
          }
        }
      });
      
      if (hasAppliedCode) {
        // Jalankan kode setelah diterapkan
        setTimeout(runCode, 100);
        setAiResponse('Kode telah diterapkan ke editor!');
        
        // Tampilkan pesan konfirmasi
        setTimeout(() => {
          setAiResponse('');
        }, 3000);
      } else {
        setAiResponse('Tidak dapat menerapkan kode. Pastikan AI memberikan kode dalam format ```bahasa\nkode\n```');
      }
    } else {
      setAiResponse('Tidak dapat menemukan blok kode dalam respons AI. Pastikan AI memberikan kode dalam format ```bahasa\nkode\n```');
    }
  };

  // Fungsi untuk mengirim pertanyaan contoh
  const sendExampleQuery = (exampleQuery) => {
    setAiQuery(exampleQuery);
    
    // Fokus ke input AI
    setTimeout(() => {
      const input = document.querySelector('.ai-query textarea');
      input?.focus();
    }, 100);
  };

  // Muat riwayat AI dari localStorage saat komponen dimuat
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem('aiHistory');
      if (savedHistory) {
        try {
          setAiHistory(JSON.parse(savedHistory));
        } catch (e) {
          console.error('Error parsing AI history:', e);
        }
      }
    }
    
    // Delay untuk memastikan iframe sudah siap
    const timer = setTimeout(() => {
      runCode();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll ke respons AI saat muncul
  useEffect(() => {
    if (aiResponse && aiResponseRef.current) {
      aiResponseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [aiResponse]);

  return (
    <>
      <Head>
        <title>Compiler - Compile All</title>
        <meta name="description" content="Compiler kode HTML, CSS, dan JavaScript dengan bantuan AI" />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">Compile<span>All</span></div>
          <div className="nav-links">
            <a href="/">Beranda</a>
            <a href="/documentation">Dokumentasi</a>
            <a href="/compiler" className="active">Compiler</a>
          </div>
          <a href="/compiler" className="btn btn-primary">Buka Compiler</a>
        </div>
      </nav>

      <div className="container" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <div className="header">
          <h1>HTML/CSS/JS Compiler dengan AI</h1>
          <p>Buat, jalankan, dan dapatkan bantuan AI untuk kode Anda dalam satu tempat</p>
        </div>

        <div className="compiler-grid">
          {/* Editor HTML */}
          <div className="editor-section">
            <div className="editor-header">
              <div className="tab active">index.html</div>
            </div>
            <textarea
              className="code-editor"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              spellCheck="false"
            ></textarea>
          </div>

          {/* Editor CSS */}
          <div className="editor-section">
            <div className="editor-header">
              <div className="tab active">styles.css</div>
            </div>
            <textarea
              className="code-editor"
              value={css}
              onChange={(e) => setCss(e.target.value)}
              spellCheck="false"
            ></textarea>
          </div>

          {/* Editor JavaScript */}
          <div className="editor-section">
            <div className="editor-header">
              <div className="tab active">script.js</div>
            </div>
            <textarea
              className="code-editor"
              value={js}
              onChange={(e) => setJs(e.target.value)}
              spellCheck="false"
            ></textarea>
          </div>

          {/* Preview */}
          <div className="preview-section">
            <div className="preview-header">
              <div className="preview-tabs">
                <div className="tab active">Preview</div>
              </div>
              <button className="btn btn-primary" onClick={runCode}>Jalankan</button>
            </div>
            <div className="preview-content">
              <iframe 
                ref={iframeRef}
                title="Preview"
                sandbox="allow-scripts allow-same-origin"
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>
          </div>

          {/* AI Assistant */}
          <div className="ai-section">
            <div className="ai-header">
              <div className="ai-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h2>AI Assistant</h2>
            </div>
            
            {/* Riwayat Pertanyaan */}
            {aiHistory.length > 0 && (
              <div className="ai-history">
                <div className="ai-history-header">
                  <h3>Riwayat Pertanyaan</h3>
                  <button 
                    className="btn btn-outline"
                    onClick={() => setAiHistory([])}
                  >
                    Bersihkan
                  </button>
                </div>
                <div className="ai-history-list">
                  {aiHistory.map((item, index) => (
                    <div 
                      key={index} 
                      className="ai-history-item"
                      onClick={() => {
                        setAiQuery(item.query);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <div className="ai-history-query">{item.query}</div>
                      <div className="ai-history-time">
                        {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Contoh Pertanyaan */}
            <div className="ai-suggestions">
              <h3>Contoh Pertanyaan:</h3>
              <div className="suggestion-buttons">
                <button 
                  className="btn btn-outline"
                  onClick={() => sendExampleQuery("Bagaimana cara memperbaiki error 'Cannot read property of undefined'?")}
                >
                  Perbaiki error
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => sendExampleQuery("Bisakah Anda mengoptimalkan kode CSS saya?")}
                >
                  Optimasi CSS
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => sendExampleQuery("Ubah kode HTML ini menjadi menggunakan framework React")}
                >
                  Konversi ke React
                </button>
              </div>
            </div>
            
            {/* Form Pertanyaan */}
            <div className="ai-query">
              <textarea
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                placeholder="Tanyakan sesuatu tentang kode Anda... Misalnya: 'Bagaimana cara memperbaiki error ini?', 'Bisakah Anda mengoptimalkan kode saya?', 'Jelaskan kode ini'"
                rows="3"
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendToAi())}
              ></textarea>
              <button 
                className="btn btn-primary" 
                onClick={sendToAi}
                disabled={aiLoading}
              >
                {aiLoading ? 'Memproses...' : 'Tanya AI'}
              </button>
            </div>
            
            {/* Respons AI */}
            {aiResponse && (
              <div className="ai-response" ref={aiResponseRef}>
                <div className="ai-response-header">
                  <h3>Respons AI</h3>
                  <div className="ai-response-actions">
                    <button 
                      className="btn btn-outline" 
                      onClick={() => applyAiSuggestion(aiResponse)}
                    >
                      Terapkan Saran
                    </button>
                    <button 
                      className="btn btn-outline" 
                      onClick={() => navigator.clipboard.writeText(aiResponse)}
                    >
                      Salin
                    </button>
                  </div>
                </div>
                <div className="ai-response-content">
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: aiResponse
                        .replace(/```([a-z]*)\n([\s\S]*?)\n```/g, '<div class="code-block"><div class="code-header">$1</div><pre>$2</pre></div>')
                        .replace(/\n/g, '<br/>')
                        .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
                    }} 
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Tips Penggunaan */}
        <div className="tips-section">
          <h2>💡 Tips Menggunakan AI Assistant</h2>
          <ul className="tips-list">
            <li>Untuk pertanyaan spesifik, sebutkan bagian kode yang bermasalah</li>
            <li>Anda bisa meminta AI untuk menjelaskan, memperbaiki, atau mengoptimalkan kode</li>
            <li>Klik "Terapkan Saran" untuk langsung menerapkan kode yang disarankan ke editor</li>
            <li>Gunakan riwayat pertanyaan untuk melihat pertanyaan sebelumnya</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Mulai Kode dengan Lebih Cepat Hari Ini</h2>
          <p className="cta-subtitle">
            Tidak perlu mendaftar, tidak perlu kartu kredit, 100% gratis untuk semua pengguna
          </p>
          <a href="/compiler" className="btn btn-primary btn-cta-large">Buka Compiler Sekarang</a>
          <p className="cta-note">Tidak ada batasan penggunaan • Tidak ada iklan mengganggu</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Compile<span>All</span></div>
            <div className="footer-links">
              <a href="/">Beranda</a>
              <a href="/documentation">Dokumentasi</a>
              <a href="/compiler" className="active">Compiler</a>
              <a href="#">Blog</a>
              <a href="#">Kontak</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Compile All. Hak Cipta Dilindungi. 100% Gratis untuk Semua Pengguna.</p>
          </div>
        </div>
      </footer>
    </>
  );
}