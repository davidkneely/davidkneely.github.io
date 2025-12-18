import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Skills.css';

const Skills = () => {
    // Skills data with filter tags
    const skills = [
        { name: "Unity", tag: "Unity" },
        { name: "C#", tag: "C#" },
        { name: "React", tag: "React" },
        { name: "Node ", tag: "Node" },
        { name: "SQL", tag: "SQL" },
        { name: "Swift", tag: "Swift" },
        { name: "HTML", tag: "HTML" },
        { name: "CSS", tag: "CSS" },
        { name: "Javascript", tag: "Javascript" }
    ];

    return (
        <div className="skills-section">
            <h2 className="skills-title">Technical Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <Link to={`/projects?skill=${skill.tag}`} key={index} className="skill-pill">
                        {skill.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Skills;
