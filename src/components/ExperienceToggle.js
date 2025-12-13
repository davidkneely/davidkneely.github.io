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
              <li>When new students delayed engagement with the Manoa Career Center, limiting early relationship-building opportunities, I designed, developed, and maintained multi-platform learning and engagement tools including a website, podcast, YouTube channel, and iOS/Android apps, facilitating early student engagement, establishing stronger relationships with the Career Center, significantly increasing student participation in résumé reviews, interview prep, and career readiness workshops.
</li>
              <li>Managed junior IT specialists and mentored them through technical exercises, code reviews, and career-readiness coaching, combining hands-on software expertise with professional development guidance resulting in many of them getting jobs in software development right out of college.
</li>
              <li>When a key staff member, managing a large student employment database left unexpectedly, risking service disruption, I volunteered to learn the necessary technology, completed courses in SQL and JavaServer Pages (JSP), and successfully took on the new responsibilities. This resulted in uninterrupted service and seamless management of the student employment database.
</li>
<li>Secured PII for over 65,000 students by detecting and encrypting sensitive data, identifying critical server vulnerabilities, and applying technical patches, effectively preventing potential data breaches and network intrusions.
</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title">
                <h3>Mobile Software Engineer (Contract)</h3>
                <p className="experience-company">Tiny Mobile Inc</p>
              </div>
              <div className="experience-date">2018 - Present</div>
            </div>
            <ul className="experience-details">
              <li>When declining week-one engagement threatened revenue, I combined product strategy and hands-on engineering to design and build a daily virtual-coin reward mechanic, driving habitual return behavior and increasing week-one user retention by 13%.
</li>
              <li>When data showed that players were sticking to a single game type instead of exploring the app’s full catalog, I leveraged UX design and monetization strategy to redesign game selection cards with dynamic video loops showcasing high-win moments, increasing VIP subscriptions by 5%.
</li>
              <li>When player fatigue threatened sustain engagement, I designed and implemented probabilistically triggered mini-games that refreshed the core game loop and enabled players to multiply winnings, increasing gameplay variety, encouraging deeper betting behavior, and improving overall user retention.
</li>
<li>When an oversized iOS app prevented cellular downloads and limited acquisition, I researched and implemented App Thinning with lazy loading, enabling users to install the app directly from the App Store and dynamically download only selected game content, resulting in a smaller binary and increased overall downloads.
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
              <div className="experience-date">2025 (Completed)</div>
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