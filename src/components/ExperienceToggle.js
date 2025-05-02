import React, { useState } from 'react';
import '../App.css';

function ExperienceToggle() {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <div className="experience-section">
      <div className="toggle-container">
        <button 
          className={`toggle-button ${activeTab === 'work' ? 'active' : ''}`}
          onClick={() => setActiveTab('work')}
        >
          Work
        </button>
        <button 
          className={`toggle-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
      </div>

      {activeTab === 'work' ? (
        <div className="experience-content">
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title">
                <h3>Technology and Web Coordinator</h3>
                <p className="experience-company">The University of Hawaii at Mānoa Career Center</p>
              </div>
              <div className="experience-date">2007 - 2024</div>
            </div>
            <ul className="experience-details">
              <li>Website Development & Management – Designed, developed, and maintained the department website, ensuring functionality, accessibility, and an improved user experience for students and faculty.</li>
              <li>Career Fair App Development – Designed and launched an interactive app for the Career Center Career Fair, streamlining event navigation, employer-student connections, and real-time updates.</li>
              <li>Podcast Production – Created and produced Unsolicited Advice from Your Career Center, a podcast offering career insights, job search strategies, and industry advice for students and alumni.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title">
                <h3>Software Developer (Contract)</h3>
                <p className="experience-company">Tiny Mobile Inc</p>
              </div>
              <div className="experience-date">2018 - Present</div>
            </div>
            <ul className="experience-details">
              <li>Player Retention Mechanics – Designed and implemented engaging retention features to encourage repeat gameplay, boosting user retention and session length.</li>
              <li>UI/UX Design Enhancement – Reenvisioned and optimized the user interface for a more immersive and visually compelling experience, improving user engagement and satisfaction.</li>
              <li>Game Development for Casino & Lottery Apps – Enhanced gameplay mechanics and visuals for Ace Slots Casino and American Scratchers Lottery, refining the slot machine and scratcher experiences to maximize player enjoyment and retention.</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="experience-content">
          

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title">
                <h3>M.Ed. Learning Design and Technology</h3>
                <p className="experience-company">The University of Hawaii at Mānoa</p>
              </div>
              <div className="experience-date">2025</div>
            </div>
            <ul className="experience-details">
              <li>Instructional Design Expertise – Knowledgeable in learning theories and frameworks such as ARCS Model of Motivation, Gagné's Nine Events of Instruction, and Bloom's Taxonomy, applying them to enhance learner engagement and instructional effectiveness.</li>
              <li>Master's Research Project – Investigating how AI-assisted learning impacts new professionals' affective states, exploring strategies to improve confidence, motivation, and adaptability in AI-integrated learning environments.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title">
                <h3>Bachelor of Arts in Information and Computer Science</h3>
                <p className="experience-company">The University of Hawaii at Mānoa</p>
              </div>
              <div className="experience-date">2006</div>
            </div>
            <ul className="experience-details">
              <li>Creative & Technical Skills – Specialized in Software Engineering and Web Development, with additional studies in Graphic Design and Animation to enhance user experience and digital storytelling.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceToggle; 