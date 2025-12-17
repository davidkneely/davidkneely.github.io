import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './components/Projects';
import Project from './components/Project';
import Blog from './components/Blog';
import Post from './components/Post';
import ExperienceToggle from './components/ExperienceToggle';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">Dave Neely</Link>
          </div>
          <div className="navbar-links">
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <a href="mailto:dave@daveneely.com">Contact</a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="content">
              <div className="profile-section">
                <div className="profile-image-container">
                  <img src="/dave.jpg" alt="Profile" className="profile-image" />
                </div>
                <h1 className="greeting">
                  Hi, I'm Dave <span role="img" aria-label="shaka" style={{ background: 'none', WebkitBackgroundClip: 'initial', backgroundClip: 'initial', WebkitTextFillColor: 'initial', color: 'inherit' }}>🤙</span>
                </h1>
                <p className="bio">
                  I'm a Full-Stack Mobile Software Engineer with 15 years of experience
                  building websites (PHP, React, Node, SQL) and apps (Swift, Unity, C#). I'm located in Dursley, England 🇬🇧
                </p>
                <div className="social-links">
                  <a href="https://docs.google.com/document/d/1rTgWWc1_o3Nypm5dsydI9KZvX4ysrHQAYFhz-ZmSYfw/edit?usp=sharing" className="resume-button">
                    <span>↓</span> Resume
                  </a>
                  <div className="icon-links">
                    <a href="https://github.com/davidkneely" className="social-icon github">
                      <img src="/github-icon.svg" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/david-neely-7a180b34b/" className="social-icon linkedin">
                      <img src="/linkedin-icon.svg" alt="LinkedIn" />
                    </a>
                    <a href="mailto:dave@daveneely.com" className="social-icon email">
                      <img src="/email-icon.svg" alt="Email" />
                    </a>
                  </div>
                </div>
                <ExperienceToggle />
              </div>
            </div>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
