import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Skills.css';

const Skills = () => {
    // Skills data with links to potential detail pages
    const skills = [
        { name: "Unity / C#", link: "/projects/unity" },
        { name: "React / Node / SQLite", link: "/projects/react" },
        { name: "Swift / SwiftUI", link: "/projects/swift" },
        { name: "PHP / MySQL", link: "/projects/php" },
        { name: "HTML / CSS / Javascript", link: "/projects/html-css" }
    ];

    return (
        <div className="skills-section">
            <h2 className="skills-title">Technical Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <Link to={skill.link} key={index} className="skill-pill">
                        {skill.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Skills;
