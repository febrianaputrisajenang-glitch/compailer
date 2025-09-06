import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Compile All - Code with AI Assistance</title>
        <meta name="description" content="Online code compiler with AI assistant to help with your coding development - 100% free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">Compile<span>All</span></div>
          <div className="nav-links">
            <a href="#features">Fitur</a>
            <a href="#how-it-works">Cara Kerja</a>
            <Link href="/documentation" className="active">Dokumentasi</Link>
          </div>
          <Link href="/compiler" className="btn btn-primary">Mulai Gratis</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Kode Lebih Cepat dengan <span>Bantuan AI</span></h1>
          <p className="hero-subtitle">
            Compiler kode online dengan asisten AI real-time yang membantu Anda menulis, mendebug, dan mengoptimalkan kode
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
                <div className="comment">&nbsp;&nbsp;// AI suggestion: Tambahkan validasi</div>
                <div>&nbsp;&nbsp;<span className="keyword">if</span> (!name) <span className="error">throw</span> <span className="keyword">new</span> <span className="error">Error</span>(<span className="string">&apos;Name required&apos;</span>);</div>
                <div>&nbsp;&nbsp;<span className="keyword">return</span> <span className="template-literal">`Hello, $</span><span className="template-curly">{'{'}</span><span className="template-variable">name</span><span className="template-curly">{'}'}</span><span className="template-literal">!`</span>;</div>
                <div>{'}'}</div>
              </div>
              
              <div className="code-column">
                <div className="ai-panel">
                  <div className="ai-header">
                    <svg className="ai-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                    Asisten AI
                  </div>
                  <p>💡 Saya mendeteksi potensi error saat name tidak diberikan.<br />
                  Saya telah menambahkan validasi input untuk menghindari error undefined.</p>
                  <div className="ai-actions">
                    <button className="btn btn-primary">Terapkan</button>
                    <button className="btn btn-outline">Tanya Lagi</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button className="btn btn-primary btn-large">
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Coba Sekarang
            </button>
            <Link href="/documentation" className="btn btn-outline btn-large">Lihat Dokumentasi</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Fitur Utama</h2>
          <p className="section-subtitle">
            Kombinasi sempurna antara compiler kode dan asisten AI untuk pengalaman pengembangan yang lebih baik
          </p>
          
          <div className="grid">
            {/* Feature 1 */}
            <div className="card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3>Compiler Real-time</h3>
              <p>
                Kompilasi kode dalam berbagai bahasa pemrograman secara instan dengan output yang jelas dan penyorotan error yang akurat
              </p>
              <div className="language-tags">
                <span className="language-tag">JavaScript</span>
                <span className="language-tag">Python</span>
                <span className="language-tag">Java</span>
                <span className="language-tag">C++</span>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <h3>Asisten AI Cerdas</h3>
              <p>
                Dapatkan saran kode, penjelasan error, dan optimasi secara real-time dari asisten AI yang terlatih khusus untuk pengembangan perangkat lunak
              </p>
              <ul className="feature-list">
                <li>
                  <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Penjelasan error dalam bahasa Indonesia
                </li>
                <li>
                  <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Saran optimasi kode
                </li>
                <li>
                  <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Konversi kode antar bahasa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2>Cara Kerja</h2>
          <p className="section-subtitle">
            Proses sederhana untuk mulai menggunakan Compile All
          </p>
          
          <div className="grid steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Tulis Kode</h3>
              <p>
                Gunakan editor kode modern dengan penyorotan sintaks dan auto-complete
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Dapatkan Bantuan AI</h3>
              <p>
                Klik ikon AI untuk berinteraksi dengan asisten saat menemui masalah
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Kompilasi &amp; Jalankan</h3>
              <p>
                Lihat hasil kompilasi dan output dalam satu klik
              </p>
            </div>
          </div>
          
          <div className="ai-example">
            <div className="ai-example-header">
              <div className="ai-icon-container">
                <svg className="ai-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3>Contoh Interaksi dengan AI</h3>
                <p className="example-query">&quot;Bagaimana cara mengatasi error &apos;Cannot read property of undefined&apos;?&quot;</p>
              </div>
            </div>
            
            <div className="ai-panel">
              <p>
                <span className="ai-header">Asisten AI:</span> Error ini terjadi karena Anda mencoba mengakses properti dari variabel yang bernilai undefined. 
                Berikut solusinya:
              </p>
              <div className="solution-code">
                <div>// Sebelum</div>
                <div>const user = users.find(u {'='}&gt; u.id === userId);</div>
                <div>console.log(user.name);</div>
                <br />
                <div>// Sesudah (dengan null check)</div>
                <div>const user = users.find(u {'='}&gt; u.id === userId);</div>
                <div>if (user) {'{'}</div>
                <div>&nbsp;&nbsp;console.log(user.name);</div>
                <div>{'}'} else {'{'}</div>
                <div>&nbsp;&nbsp;console.log(&quot;User tidak ditemukan&quot;);</div>
                <div>{'}'}</div>
              </div>
              <div className="ai-actions">
                <button className="btn btn-primary">Salin Kode</button>
                <button className="btn btn-outline">Tanya Detail</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Mulai Kode dengan Lebih Cepat Hari Ini</h2>
          <p className="cta-subtitle">
            Bergabunglah dengan ribuan developer yang telah meningkatkan produktivitas coding mereka dengan bantuan AI
          </p>
          <div className="cta-form">
            <input 
              type="email" 
              placeholder="Masukkan email Anda" 
              className="email-input"
            />
            <Link href="/documentation" className="btn btn-primary btn-cta">Dapatkan Akses Gratis</Link>
          </div>
          <p className="cta-note">100% Gratis - Tidak perlu kartu kredit • Tidak ada biaya tersembunyi</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Compile<span>All</span></div>
            <div className="footer-links">
              <a href="#">Fitur</a>
              <Link href="/documentation" className="active">Dokumentasi</Link>
              <a href="#">Blog</a>
              <a href="#">Kontak</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Compile All. Hak Cipta Dilindungi. 100% Gratis untuk Semua Pengguna.</p>
          </div>
        </div>
      </footer>
    </>
  )
}