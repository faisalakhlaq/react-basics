import React from 'react';

import '../assets/skills.css';


const sectionContainerStyle = {
    padding: "2em",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "2em"
};

const headingStyle = {
    textAlign: "center",
    fontSize: "2.5em",
    marginBottom: "1em",
    color: "#333"
};

const subHeadingStyle = {
    fontSize: "1.5em",
    marginBottom: "0.8em",
    color: "#444"
};

const skillsListContainerStyle = {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem'
};

const skillColumnStyle = {
    flex: '1 1 250px',
    maxWidth: '350px',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
};

const listItemStyle = {
    marginBottom: '0.5em',
    color: '#666'
};

const subSkillList = {
    paddingLeft: '1.5em',
    marginTop: '0.3em',
    marginBottom: '0.8em',
}


const Skills = () => {
    return (
        <div id="skills" className="base-container" style={sectionContainerStyle}>
            <h1 style={headingStyle}>Skills</h1>

            <div style={skillsListContainerStyle}>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Product Skills</h3>
                    <li style={listItemStyle}>Requirements Gathering</li>
                    <li style={listItemStyle}>Backlog Management</li>
                    <li style={listItemStyle}>Agile: Scrum, Sprint Planning, Jira/Trello</li>
                    <li style={listItemStyle}>Team Onboarding</li>
                    <li style={listItemStyle}>Project Management</li>
                    <li style={listItemStyle}>Mentoring/Teaching</li>
                    <li style={listItemStyle}>Technical Leadership</li>
                    <li style={listItemStyle}>Time Management</li>
                    <li style={listItemStyle}>Goal Setting</li>
                    <li style={listItemStyle}>Technical Writing</li>
                    <li style={listItemStyle}>Communication (Stakeholder & Team)</li>
                    <li style={listItemStyle}>Positive Attitude</li>
                </ul>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Languages</h3>
                    <li style={listItemStyle}>Python</li>
                    <ul style={subSkillList}>
                        <li className="sub-skill-item">Web Scraping</li>
                        <li className="sub-skill-item">Pandas</li>
                        <li className="sub-skill-item">Bokeh</li>
                    </ul>
                    <li style={listItemStyle}>JavaScript</li>
                    <li style={listItemStyle}>Java (Basic)</li>
                    <li style={listItemStyle}>C++ (Basic)</li>
                </ul>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Frameworks</h3>
                    <li style={listItemStyle}>Django</li>
                    <ul style={subSkillList}>
                        <li className="sub-skill-item">REST Framework API</li>
                        <li className="sub-skill-item">Celery</li>
                        <li className="sub-skill-item">ORM</li>
                        <li className="sub-skill-item">Internationalization (Translations)</li>
                        <li className="sub-skill-item">User Authentication</li>
                        <li className="sub-skill-item">Generic Views</li>
                        <li className="sub-skill-item">Unit & Functional Testing</li>
                        <li className="sub-skill-item">Selenium (Test Automation)</li>
                    </ul>
                    <li style={listItemStyle}>Flask</li>
                    <li style={listItemStyle}>TypeScript</li>
                    <li style={listItemStyle}>SvelteKit</li>
                    <li style={listItemStyle}>Node.js (Basic)</li>
                    <li style={listItemStyle}>React (Basic)</li>
                    <li style={listItemStyle}>React-native (Basic)</li>
                    <li style={listItemStyle}>Android (Basic)</li>
                    <li style={listItemStyle}>IoT (Basic)</li>
                    <li style={listItemStyle}>Node-RED (Basic)</li>
                    <li style={listItemStyle}>Database Interaction</li>
                </ul>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Real-time Systems</h3>
                    <li style={listItemStyle}>MQTT</li>
                    <li style={listItemStyle}>WebSockets</li>
                    <li style={listItemStyle}>Redis Pub/Sub</li>
                </ul>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Development Environment & Tools</h3>
                    <li style={listItemStyle}>Version control (Git)</li>
                    <li style={listItemStyle}>GitHub Actions (Workflows)</li>
                    <li style={listItemStyle}>GitHub Action Runners</li>
                    <li style={listItemStyle}>HTML & CSS</li>
                    <li style={listItemStyle}>Databases (PostgreSQL, MySQL)</li>
                    <li style={listItemStyle}>Ubuntu</li>
                    <li style={listItemStyle}>Containerization (Docker)</li>
                    <li style={listItemStyle}>CI/CD</li>
                </ul>

            </div>
        </div>
    );
}

export default Skills;
