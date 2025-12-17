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
                <h3>Mobile Software Engineer (Contract)</h3>
                <p className="experience-company">Tiny Mobile Inc</p>
              </div>
              <div className="experience-date">2018 - Present</div>
            </div>
            <ul className="experience-details">
              <li>Designed and built a daily reward mechanic, driving habitual return behavior and <strong>increasing week-one user retention by 13%</strong>.
              </li>
              <li>Leveraged UX and monetization strategy to redesign game selection cards with dynamic video loops showcasing high-win moments, <strong>increasing VIP subscriptions by 5%</strong>.
              </li>
              <li>Designed and implemented probabilistically triggered mini-games that refreshed the core game loop and enabled players to multiply winnings, <strong>increasing gameplay variety, encouraging deeper betting behavior, and improving overall user retention</strong>.
              </li>
              <li>Researched and implemented App Thinning with lazy loading, enabling users to install the app directly from the App Store <strong>resulting in a smaller binary and increased overall downloads</strong>.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title">
                <h3>Technology and Web Coordinator</h3>
                <p className="experience-company">The University of Hawaii at Mānoa Career Center</p>
              </div>
              <div className="experience-date">2007 - 2024</div>
            </div>
            <ul className="experience-details">
              <li>Designed, developed, and maintained multi-platform learning and engagement tools including a website with over 138k pageviews, podcast, YouTube channel, and iOS/Android apps, <strong>resulting in a 38% increase in student participation in résumé reviews, interview prep, and career readiness workshops</strong>.
              </li>
              <li><strong>Managed junior IT specialists and mentored them through technical exercises, code reviews, and career-readiness coaching</strong>, combining hands-on software expertise with professional development guidance resulting in many of them getting jobs in software development right out of college.
              </li>
              <li><strong>Independently completed courses in SQL and CDCI to successfully take on the new responsibilities</strong> resulting in uninterrupted service and seamless management of the student employment database when a key staff member left unexpectedly.
              </li>
              <li><strong>Secured PII for over 65k students by detecting and encrypting sensitive data, identifying critical server vulnerabilities, and applying technical patches</strong>, effectively preventing potential data breaches and network intrusions.
              </li>
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
              {/* <div className="experience-date">2025 (Completed)</div> */}
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
              {/* <div className="experience-date">2006</div> */}
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