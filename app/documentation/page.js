import Head from 'next/head'
import Link from 'next/link'

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Dokumentasi Compile All - Panduan Lengkap</title>
        <meta name="description" content="Dokumentasi lengkap untuk Compile All - compiler kode dengan bantuan AI 100% gratis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">Compile<span>All</span></div>
          <div className="nav-links">
            <a href="/">Beranda</a>
            <a href="/documentation" className="active">Dokumentasi</a>
            <a href="#features">Fitur</a>
          </div>
          <a href="/compiler">
          <button className="btn btn-primary">Mulai Gratis</button>
</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-docs">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Beranda</a> <span>Dokumentasi</span>
          </div>
          <h1>Dokumentasi Compile All</h1>
          <p className="hero-subtitle">
            Panduan lengkap untuk menggunakan compiler kode dengan bantuan AI 100% gratis
          </p>
          
          <div className="search-bar">
            <input type="text" placeholder="Cari dokumentasi..." />
            <button className="btn btn-primary">Cari</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="docs-content">
        <div className="container">
          <div className="docs-grid">
            {/* Table of Contents */}
            <div className="toc">
              <h3>Daftar Isi</h3>
              <ul>
                <li><a href="#introduction">Pengenalan</a></li>
                <li><a href="#supported-languages">Bahasa Pemrograman yang Didukung</a></li>
                <li><a href="#getting-started">Memulai</a></li>
                <li><a href="#using-compiler">Menggunakan Compiler</a></li>
                <li><a href="#ai-assistant">Berinteraksi dengan AI Assistant</a></li>
                <li><a href="#keyboard-shortcuts">Shortcut Keyboard</a></li>
                <li><a href="#faq">Pertanyaan Umum (FAQ)</a></li>
              </ul>
            </div>
            
            {/* Documentation Content */}
            <div className="docs-main">
              {/* Introduction */}
              <section id="introduction" className="docs-section">
                <h2>Pengenalan</h2>
                <p>
                  Compile All adalah platform compiler kode online dengan bantuan AI yang 100% gratis. 
                  Platform ini dirancang untuk membantu developer dalam menulis, mendebung, dan mengoptimalkan kode mereka dengan bantuan asisten AI yang cerdas.
                </p>
                <p>
                  Dengan Compile All, Anda dapat:
                </p>
                <ul className="feature-list">
                  <li>
                    <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mengkompilasi kode dalam berbagai bahasa pemrograman secara instan
                  </li>
                  <li>
                    <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mendapatkan saran kode dan penjelasan error dari AI
                  </li>
                  <li>
                    <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mengkonversi kode antar bahasa pemrograman
                  </li>
                  <li>
                    <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    100% gratis tanpa batasan
                  </li>
                </ul>
              </section>

              {/* Supported Languages */}
              <section id="supported-languages" className="docs-section">
                <h2>Bahasa Pemrograman yang Didukung</h2>
                <p>
                  Compile All mendukung berbagai bahasa pemrograman populer. Berikut daftar lengkapnya:
                </p>
                
                <div className="language-grid">
                  <div className="language-card">
                    <div className="language-icon">JS</div>
                    <h3>JavaScript</h3>
                    <p>Compiler untuk ES6+ dengan dukungan Node.js runtime</p>
                    <div className="language-features">
                      <span className="feature-tag">Node.js 18</span>
                      <span className="feature-tag">ES Modules</span>
                      <span className="feature-tag">TypeScript</span>
                    </div>
                  </div>
                  
                  <div className="language-card">
                    <div className="language-icon">PY</div>
                    <h3>Python</h3>
                    <p>Compiler untuk Python 3.x dengan dukungan library populer</p>
                    <div className="language-features">
                      <span className="feature-tag">Python 3.10</span>
                      <span className="feature-tag">NumPy</span>
                      <span className="feature-tag">Pandas</span>
                    </div>
                  </div>
                  
                  <div className="language-card">
                    <div className="language-icon">J</div>
                    <h3>Java</h3>
                    <p>Compiler untuk Java dengan JDK 17</p>
                    <div className="language-features">
                      <span className="feature-tag">JDK 17</span>
                      <span className="feature-tag">Maven</span>
                      <span className="feature-tag">JUnit</span>
                    </div>
                  </div>
                  
                  <div className="language-card">
                    <div className="language-icon">C++</div>
                    <h3>C++</h3>
                    <p>Compiler untuk C++ dengan dukungan standar terbaru</p>
                    <div className="language-features">
                      <span className="feature-tag">C++17</span>
                      <span className="feature-tag">STL</span>
                      <span className="feature-tag">Boost</span>
                    </div>
                  </div>
                </div>
                
                <div className="note-box">
                  <div className="note-icon">!</div>
                  <div>
                    <p><strong>Catatan:</strong> Kami terus menambahkan dukungan untuk bahasa pemrograman lain. Jika Anda membutuhkan bahasa tertentu yang belum tersedia, 
                    silakan <a href="#" className="text-link">kirim permintaan fitur</a>.</p>
                  </div>
                </div>
              </section>

              {/* Getting Started */}
              <section id="getting-started" className="docs-section">
                <h2>Memulai dengan Compile All</h2>
                <p>
                  Berikut langkah-langkah untuk memulai menggunakan Compile All:
                </p>
                
                <div className="step-list">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div>
                      <h3>Buka Website Compile All</h3>
                      <p>
                        Kunjungi <a href="https://compailerall.vercel.app" className="text-link">https://compailerall.vercel.app</a> menggunakan browser Anda.
                      </p>
                    </div>
                  </div>
                  
                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div>
                      <h3>Pilih Bahasa Pemrograman</h3>
                      <p>
                        Di halaman utama, pilih bahasa pemrograman yang ingin Anda gunakan dari dropdown di pojok kiri atas.
                      </p>
                      <div className="code-block mini">
                        <div className="terminal-header">
                          <div className="terminal-dot dot-red"></div>
                          <div className="terminal-dot dot-yellow"></div>
                          <div className="terminal-dot dot-green"></div>
                        </div>
                        <div className="code-content">
                          <div className="code-column">
                            <div>Pilih bahasa: <span className="keyword">JavaScript</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div>
                      <h3>Tulis atau Tempel Kode Anda</h3>
                      <p>
                        Tulis kode Anda di editor utama atau tempel kode yang sudah ada.
                      </p>
                    </div>
                  </div>
                  
                  <div className="step-item">
                    <div className="step-number">4</div>
                    <div>
                      <h3>Klik Tombol "Compile"</h3>
                      <p>
                        Klik tombol "Compile" di pojok kanan atas untuk menjalankan kode Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Using the Compiler */}
              <section id="using-compiler" className="docs-section">
                <h2>Menggunakan Compiler</h2>
                <p>
                  Compile All menyediakan antarmuka yang intuitif untuk mengkompilasi dan menjalankan kode Anda.
                </p>
                
                <h3>Antarmuka Editor</h3>
                <p>
                  Editor kode Compile All memiliki fitur-fitur berikut:
                </p>
                <ul className="feature-list">
                  <li>
                    <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Penyorotan sintaks yang akurat
                  </li>
                  <li>
                    <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Auto-complete untuk menghemat waktu penulisan kode
                  </li>
                  <li>
                    <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Penomoran baris untuk memudahkan pelacakan error
                  </li>
                  <li>
                    <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Dukungan tema terang/gelap
                  </li>
                </ul>
                
                <h3>Menjalankan Kode</h3>
                <p>
                  Untuk menjalankan kode Anda:
                </p>
                <ol className="numbered-list">
                  <li>Tulis kode Anda di editor</li>
                  <li>Klik tombol "Compile" di pojok kanan atas</li>
                  <li>Lihat hasil kompilasi di panel output di bawah editor</li>
                </ol>
                
                <div className="code-block">
                  <div className="terminal-header">
                    <div className="terminal-dot dot-red"></div>
                    <div className="terminal-dot dot-yellow"></div>
                    <div className="terminal-dot dot-green"></div>
                  </div>
                  <div className="code-content">
                    <div className="code-column">
                      <div>function <span className="function">greet</span>(<span className="variable">name</span>) {'{'}</div>
                      <div>&nbsp;&nbsp;<span className="keyword">return</span> <span className="string">`Hello, $</span><span className="template-curly">{'{'}</span><span className="template-variable">name</span><span className="template-curly">{'}'}</span><span className="string">!`</span>;</div>
                      <div>{'}'}</div>
                      <br />
                      <div>console.log(greet(<span className="string">'Compile All'</span>));</div>
                    </div>
                  </div>
                </div>
                
                <p>
                  Setelah mengklik "Compile", Anda akan melihat output berikut di panel bawah:
                </p>
                
                <div className="output-panel">
                  <div className="output-header">Output</div>
                  <div className="output-content">
                    <div>Hello, Compile All!</div>
                  </div>
                </div>
                
                <h3>Menangani Error</h3>
                <p>
                  Jika kode Anda mengandung error, Compile All akan menampilkan pesan error yang jelas beserta lokasi error:
                </p>
                
                <div className="code-block">
                  <div className="terminal-header">
                    <div className="terminal-dot dot-red"></div>
                    <div className="terminal-dot dot-yellow"></div>
                    <div className="terminal-dot dot-green"></div>
                  </div>
                  <div className="code-content">
                    <div className="code-column">
                      <div>function <span className="function">greet</span>(<span className="variable">name</span>) {'{'}</div>
                      <div>&nbsp;&nbsp;<span className="keyword">return</span> <span className="string">`Hello, $</span><span className="template-curly">{'{'}</span><span className="template-variable">name</span><span className="template-curly">{'}'}</span><span className="string">!`</span>;</div>
                      <div>{'}'}</div>
                      <br />
                      <div>console.log(greet());</div>
                    </div>
                  </div>
                </div>
                
                <div className="error-panel">
                  <div className="error-header">Error</div>
                  <div className="error-content">
                    <div><span className="error">TypeError</span>: Cannot read property 'name' of undefined</div>
                    <div>Di baris 2, kolom 24</div>
                  </div>
                </div>
              </section>

              {/* AI Assistant */}
              <section id="ai-assistant" className="docs-section">
                <h2>Berinteraksi dengan AI Assistant</h2>
                <p>
                  Fitur unggulan Compile All adalah AI Assistant yang dapat membantu Anda menulis, mendebug, dan mengoptimalkan kode.
                </p>
                
                <h3>Cara Menggunakan AI Assistant</h3>
                <ol className="numbered-list">
                  <li>
                    <strong>Klik Ikon AI</strong>
                    <p>
                      Klik ikon AI di pojok kanan bawah untuk membuka panel asisten.
                    </p>
                  </li>
                  <li>
                    <strong>Tulis Pertanyaan atau Pilih Opsi</strong>
                    <p>
                      Anda dapat menulis pertanyaan secara langsung atau memilih dari opsi yang tersedia seperti "Perbaiki Error", "Optimasi Kode", atau "Jelaskan Kode".
                    </p>
                  </li>
                  <li>
                    <strong>Lihat Saran dari AI</strong>
                    <p>
                      AI akan memberikan saran atau penjelasan di panel sebelah kanan editor.
                    </p>
                  </li>
                  <li>
                    <strong>Terapkan Perubahan (Opsional)</strong>
                    <p>
                      Klik tombol "Terapkan" untuk menerapkan perubahan yang disarankan ke kode Anda.
                    </p>
                  </li>
                </ol>
                
                <div className="ai-example">
                  <div className="ai-example-header">
                    <div className="ai-icon-container">
                      <svg className="ai-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3>Contoh Interaksi dengan AI</h3>
                      <p className="example-query">"Bagaimana cara memperbaiki error 'Cannot read property of undefined'?"</p>
                    </div>
                  </div>
                  
                  <div className="ai-panel">
                    <p>
                      <span className="ai-header">Asisten AI:</span> Error ini terjadi karena Anda mencoba mengakses properti dari variabel yang bernilai undefined. 
                      Berikut solusinya:
                    </p>
                    <div className="solution-code">
                      <div>// Sebelum</div>
                      <div>const user = users.find(u =&gt; u.id === userId);</div>
                      <div>console.log(user.name);</div>
                      <br />
                      <div>// Sesudah (dengan null check)</div>
                      <div>const user = users.find(u =&gt; u.id === userId);</div>
                      <div>if (user) {'{'}</div>
                      <div>&nbsp;&nbsp;console.log(user.name);</div>
                      <div>{'}'} else {'{'}</div>
                      <div>&nbsp;&nbsp;console.log("User tidak ditemukan");</div>
                      <div>{'}'}</div>
                    </div>
                    <div className="ai-actions">
                      <button className="btn btn-primary">Terapkan</button>
                      <button className="btn btn-outline">Tanya Detail</button>
                    </div>
                  </div>
                </div>
                
                <h3>Opsi yang Tersedia</h3>
                <div className="option-grid">
                  <div className="option-card">
                    <div className="option-icon">🔍</div>
                    <h3>Jelaskan Kode</h3>
                    <p>
                      Meminta AI untuk menjelaskan kode yang dipilih dalam bahasa yang mudah dipahami
                    </p>
                  </div>
                  
                  <div className="option-card">
                    <div className="option-icon">🐞</div>
                    <h3>Perbaiki Error</h3>
                    <p>
                      Meminta AI untuk memperbaiki error yang ditemukan dalam kode Anda
                    </p>
                  </div>
                  
                  <div className="option-card">
                    <div className="option-icon">⚡</div>
                    <h3>Optimasi Kode</h3>
                    <p>
                      Meminta AI untuk mengoptimalkan kode Anda agar lebih efisien
                    </p>
                  </div>
                  
                  <div className="option-card">
                    <div className="option-icon">🔄</div>
                    <h3>Konversi Bahasa</h3>
                    <p>
                      Meminta AI untuk mengkonversi kode ke bahasa pemrograman lain
                    </p>
                  </div>
                </div>
              </section>

              {/* Keyboard Shortcuts */}
              <section id="keyboard-shortcuts" className="docs-section">
                <h2>Shortcut Keyboard</h2>
                <p>
                  Untuk meningkatkan produktivitas Anda, Compile All menyediakan berbagai shortcut keyboard:
                </p>
                
                <table className="shortcut-table">
                  <thead>
                    <tr>
                      <th>Shortcut</th>
                      <th>Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><kbd>Ctrl</kbd> + <kbd>Enter</kbd></td>
                      <td>Mengkompilasi dan menjalankan kode</td>
                    </tr>
                    <tr>
                      <td><kbd>Ctrl</kbd> + <kbd>/</kbd></td>
                      <td>Menambahkan/menghapus komentar pada baris yang dipilih</td>
                    </tr>
                    <tr>
                      <td><kbd>Ctrl</kbd> + <kbd>Space</kbd></td>
                      <td>Menampilkan auto-complete</td>
                    </tr>
                    <tr>
                      <td><kbd>Ctrl</kbd> + <kbd>S</kbd></td>
                      <td>Menyimpan kode (hanya untuk proyek)</td>
                    </tr>
                    <tr>
                      <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd></td>
                      <td>Membuka panel AI Assistant</td>
                    </tr>
                    <tr>
                      <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd></td>
                      <td>Format kode</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="note-box">
                  <div className="note-icon">ℹ️</div>
                  <div>
                    <p><strong>Catatan:</strong> Shortcut di atas berlaku untuk Windows/Linux. Untuk pengguna Mac, ganti <kbd>Ctrl</kbd> dengan <kbd>Cmd</kbd>.</p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="docs-section">
                <h2>Pertanyaan Umum (FAQ)</h2>
                
                <div className="faq-item">
                  <h3>Apakah Compile All benar-benar gratis?</h3>
                  <p>
                    Ya, Compile All 100% gratis tanpa batasan. Kami percaya bahwa alat pengembangan kualitas tinggi harus dapat diakses oleh semua orang tanpa biaya.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>Apakah kode saya aman?</h3>
                  <p>
                    Ya, kode Anda aman. Kami tidak menyimpan kode Anda setelah sesi kompilasi selesai. Semua kode diproses di sisi klien (browser Anda) dan tidak dikirim ke server kami.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>Apakah saya perlu mendaftar untuk menggunakan Compile All?</h3>
                  <p>
                    Tidak, Anda dapat langsung menggunakan Compile All tanpa perlu mendaftar atau login. Namun, jika Anda ingin menyimpan proyek, Anda dapat membuat akun gratis.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>Bahasa pemrograman apa saja yang didukung?</h3>
                  <p>
                    Saat ini Compile All mendukung JavaScript, Python, Java, dan C++. Kami terus menambahkan dukungan untuk bahasa pemrograman lain berdasarkan permintaan pengguna.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>Berapa lama kode saya disimpan?</h3>
                  <p>
                    Kode Anda disimpan di browser Anda selama sesi aktif. Jika Anda ingin menyimpan kode untuk jangka panjang, Anda dapat membuat akun gratis dan menyimpan proyek Anda di platform kami.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>Bagaimana cara melaporkan bug atau meminta fitur baru?</h3>
                  <p>
                    Anda dapat melaporkan bug atau meminta fitur baru melalui halaman <a href="#" className="text-link">Kontak</a> atau dengan mengirim email ke support@compileall.example.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Mulai Menggunakan Compile All Hari Ini</h2>
          <p className="cta-subtitle">
            Tidak perlu mendaftar, tidak perlu kartu kredit, 100% gratis untuk semua pengguna
          </p>
          <button className="btn btn-primary btn-cta-large">Mulai Koding Sekarang</button>
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
              <a href="/documentation" className="active">Dokumentasi</a>
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
  )
}