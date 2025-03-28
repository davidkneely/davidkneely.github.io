import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#home">Dave Neely</a>
        </div>
        <div className="navbar-links">
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="content">
        <div className="profile-section">
          <div className="profile-image-container">
            <img src="/dave.jpg" alt="Profile" className="profile-image" />
          </div>
          <h1 className="greeting">Hi, I'm Dave</h1>
          <p className="bio">
            I'm a Full-Stack Software Engineer with 15+ years of experience
            building websites and apps. I'm located in Stroud, England 🇬🇧
          </p>
          <div className="social-links">
            <a href="https://docs.google.com/document/d/100zsncuXnsUDuHOZTpneII6VzWVtNfkC3cCa-wCKBZs/edit?usp=sharing" className="resume-button">
              <span>↓</span> Resume
            </a>
            <div className="icon-links">
              <a href="https://github.com/davidkneely" className="social-icon github">
                <img src="/github-icon.svg" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/david-neely-7a180b34b/" className="social-icon linkedin">
                <img src="/linkedin-icon.svg" alt="LinkedIn" />
              </a>
              <a href="mailto:contactvisionrunner@gmail.com.com" className="social-icon email">
                <img src="/email-icon.svg" alt="Email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
