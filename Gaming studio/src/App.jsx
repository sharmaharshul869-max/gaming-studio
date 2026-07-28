import "./App.css";

function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="logo">🎮 NEXUS GAMES</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#games">Games</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="nav-btn">Play Now</button>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Creating Worlds Beyond Reality</h1>

          <p>
            We build immersive PC, Console and Mobile games with stunning
            graphics, innovative gameplay and unforgettable stories.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Games</button>
            <button className="secondary-btn">Start Project</button>
          </div>

          <div className="hero-stats">
            <div>
              <h2>25+</h2>
              <p>Games Released</p>
            </div>

            <div>
              <h2>10M+</h2>
              <p>Players</p>
            </div>

            <div>
              <h2>15+</h2>
              <p>Awards</p>
            </div>

            <div>
              <h2>100+</h2>
              <p>Developers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about" id="about">
        <h2>About Nexus Games</h2>

        <p>
          Nexus Games is a next-generation game development studio creating
          immersive experiences for players around the world. Our talented team
          combines creativity, storytelling, AI, Unreal Engine, Unity and
          cutting-edge technology to deliver unforgettable adventures.
        </p>

        <div className="about-cards">
          <div className="card">
            <h3>🚀 Innovation</h3>
            <p>
              Building futuristic games powered by modern technologies and AI.
            </p>
          </div>

          <div className="card">
            <h3>🎨 Creativity</h3>
            <p>
              Every project is crafted with unique stories and artistic vision.
            </p>
          </div>

          <div className="card">
            <h3>⚡ Performance</h3>
            <p>
              Smooth gameplay, optimized engines and high-quality graphics.
            </p>
          </div>

          <div className="card">
            <h3>❤️ Player First</h3>
            <p>
              Every decision we make focuses on delivering an amazing player
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GAMES ================= */}
      <section className="games" id="games">
        <h2>Featured Games</h2>

        <div className="game-grid">
          <div className="game-card">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600"
              alt="Cyber Hunter"
            />

            <div className="game-info">
              <h3>Cyber Hunter</h3>
              <p>Open World RPG</p>
              <button>Learn More</button>
            </div>
          </div>

          <div className="game-card">
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600"
              alt="War Legends"
            />

            <div className="game-info">
              <h3>War Legends</h3>
              <p>FPS Multiplayer</p>
              <button>Learn More</button>
            </div>
          </div>

          <div className="game-card">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600"
              alt="Speed Racers"
            />

            <div className="game-info">
              <h3>Speed Racers</h3>
              <p>Racing Adventure</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services" id="services">
        <h2>What We Do</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>🎮 Game Development</h3>
            <p>
              Full-cycle game development from concept to launch.
            </p>
          </div>

          <div className="service-card">
            <h3>🧠 AI Systems</h3>
            <p>
              Intelligent NPCs and advanced enemy behaviour.
            </p>
          </div>

          <div className="service-card">
            <h3>🌍 Multiplayer</h3>
            <p>
              Online multiplayer with dedicated server architecture.
            </p>
          </div>

          <div className="service-card">
            <h3>📱 Mobile Games</h3>
            <p>
              Android & iOS game development with Unity.
            </p>
          </div>

          <div className="service-card">
            <h3>🕶 VR & AR</h3>
            <p>
              Immersive virtual and augmented reality experiences.
            </p>
          </div>

          <div className="service-card">
            <h3>🎨 3D Art</h3>
            <p>
              Characters, environments and cinematic animations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
      {/* ================= DEVELOPMENT PROCESS ================= */}
      <section className="process">
        <h2>Our Development Process</h2>

        <div className="timeline">
          <div className="step">
            <span>1</span>
            <h3>Planning</h3>
            <p>Understanding client goals and defining the project roadmap.</p>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Concept Art</h3>
            <p>Creating stunning worlds, characters and environments.</p>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Development</h3>
            <p>Building gameplay using Unreal Engine & Unity.</p>
          </div>

          <div className="step">
            <span>4</span>
            <h3>Testing</h3>
            <p>Bug fixing, balancing and performance optimization.</p>
          </div>

          <div className="step">
            <span>5</span>
            <h3>Launch</h3>
            <p>Publishing on PC, Console and Mobile platforms.</p>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="team">
        <h2>Meet Our Team</h2>

        <div className="team-grid">

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="CEO"
            />
            <h3>Alex Carter</h3>
            <p>Founder & CEO</p>
          </div>

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Creative Director"
            />
            <h3>Emma Wilson</h3>
            <p>Creative Director</p>
          </div>

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/55.jpg"
              alt="Lead Developer"
            />
            <h3>James Lee</h3>
            <p>Lead Developer</p>
          </div>

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/28.jpg"
              alt="Designer"
            />
            <h3>Sophia Brown</h3>
            <p>Game Designer</p>
          </div>

        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="stats">

        <div className="stat-box">
          <h2>100+</h2>
          <p>Developers</p>
        </div>

        <div className="stat-box">
          <h2>25+</h2>
          <p>Games</p>
        </div>

        <div className="stat-box">
          <h2>10M+</h2>
          <p>Players</p>
        </div>

        <div className="stat-box">
          <h2>15+</h2>
          <p>Awards</p>
        </div>

      </section>

      {/* ================= AWARDS ================= */}
      <section className="awards">
        <h2>Awards & Achievements</h2>

        <div className="award-grid">

          <div className="award-card">
            🏆
            <h3>Best Indie Studio</h3>
            <p>Game Awards 2025</p>
          </div>

          <div className="award-card">
            🥇
            <h3>Best Mobile Game</h3>
            <p>Unity Awards</p>
          </div>

          <div className="award-card">
            ⭐
            <h3>Innovation Award</h3>
            <p>Unreal Fest</p>
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials">
        <h2>What Players Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              "One of the best multiplayer experiences I've ever played.
              Amazing graphics and smooth gameplay."
            </p>

            <h4>- Michael</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Fantastic storytelling and immersive open worlds.
              Looking forward to future releases."
            </p>

            <h4>- Sarah</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Professional developers who truly care about players."
            </p>

            <h4>- David</h4>
          </div>

        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="partners">
        <h2>Trusted Partners</h2>

        <div className="partner-logos">
          <span>Steam</span>
          <span>Epic Games</span>
          <span>Unity</span>
          <span>Unreal Engine</span>
          <span>PlayStation</span>
          <span>Xbox</span>
          <span>NVIDIA</span>
          <span>Discord</span>
        </div>
      </section>

      {/* ================= CAREERS ================= */}
      <section className="careers">

        <h2>Join Our Team</h2>

        <div className="career-grid">

          <div className="career-card">
            <h3>Unity Developer</h3>
            <button>Apply</button>
          </div>

          <div className="career-card">
            <h3>Unreal Developer</h3>
            <button>Apply</button>
          </div>

          <div className="career-card">
            <h3>Game Designer</h3>
            <button>Apply</button>
          </div>

          <div className="career-card">
            <h3>3D Artist</h3>
            <button>Apply</button>
          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}
      <section className="faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-box">
          <h3>How long does game development take?</h3>
          <p>Usually between 6 months and 2 years depending on scope.</p>
        </div>

        <div className="faq-box">
          <h3>Which engines do you use?</h3>
          <p>Unity, Unreal Engine 5 and custom engines.</p>
        </div>

        <div className="faq-box">
          <h3>Do you develop multiplayer games?</h3>
          <p>Yes, from indie co-op games to large-scale online multiplayer.</p>
        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">

        <h2>Contact Us</h2>

        <div className="contact-container">

          <div className="contact-info">
            <h3>Nexus Games Studio</h3>

            <p>📍 California, USA</p>
            <p>📞 +1 555 123 4567</p>
            <p>📧 contact@nexusgames.com</p>
          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <h2>NEXUS GAMES</h2>

        <p>
          Creating Worlds Beyond Reality.
        </p>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Games</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <p className="copyright">
          © 2026 Nexus Games. All Rights Reserved.
        </p>

      </footer>