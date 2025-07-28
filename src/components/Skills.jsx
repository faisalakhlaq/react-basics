import React from 'react';

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
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
};

const listItemStyle = {
    marginBottom: '0.5em',
    color: '#666'
};

const Skills = () => {
    return (
        <div id="skills" className="base-container" style={sectionContainerStyle}>
            <h1 style={headingStyle}>Skills</h1>

            <div style={skillsListContainerStyle}>
                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Python</h3>
                    <li style={listItemStyle}>Flask</li>
                    <li style={listItemStyle}>Database Interaction</li> 
                    <li style={listItemStyle}>Web Scraping</li>
                    <li style={listItemStyle}>Pandas</li>
                    <li style={listItemStyle}>Bokeh</li> 
                </ul>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Django</h3>
                    <li style={listItemStyle}>REST Framework API</li>
                    <li style={listItemStyle}>Celery</li>
                    <li style={listItemStyle}>ORM</li>
                    <li style={listItemStyle}>Internationalization (Translations)</li> 
                    <li style={listItemStyle}>User Authentication</li>
                    <li style={listItemStyle}>Generic Views</li>
                    <li style={listItemStyle}>Unit & Functional Testing</li> 
                </ul>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>JavaScript</h3>
                    <li style={listItemStyle}>TypeScript</li>
                    <li style={listItemStyle}>SvelteKit</li>
                </ul>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Real-time Systems</h3>
                    <li style={listItemStyle}>MQTT</li>
                    <li style={listItemStyle}>WebSockets</li>
                    <li style={listItemStyle}>Redis Pub/Sub</li>
                </ul>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Intermediate Skills</h3>
                    <li style={listItemStyle}>Git</li>
                    <li style={listItemStyle}>GitHub Actions (Workflows)</li>
                    <li style={listItemStyle}>GitHub Action Runners</li>
                    <li style={listItemStyle}>HTML & CSS</li>
                    <li style={listItemStyle}>Databases (PostgreSQL, MySQL)</li>
                    <li style={listItemStyle}>Ubuntu</li>
                    <li style={listItemStyle}>Docker</li>
                    <li style={listItemStyle}>CI/CD</li>
                </ul>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Basic Skills</h3>
                    <li style={listItemStyle}>Node.js</li>
                    <li style={listItemStyle}>React</li> 
                    <li style={listItemStyle}>Android</li>
                    <li style={listItemStyle}>IoT Concepts</li> 
                    <li style={listItemStyle}>Node-RED</li>
                    <li style={listItemStyle}>Java</li>
                    <li style={listItemStyle}>C++</li>
                </ul>

                <ul style={skillColumnStyle}>
                    <h3 style={subHeadingStyle}>Non-Technical Skills</h3>
                    <li style={listItemStyle}>Project Management</li>
                    <li style={listItemStyle}>Technical Leadership</li>
                    <li style={listItemStyle}>Time Management</li>
                    <li style={listItemStyle}>Technical Writing</li> 
                    <li style={listItemStyle}>Mentoring/Teaching</li> 
                    <li style={listItemStyle}>Communication</li>
                    <li style={listItemStyle}>Goal Setting</li>
                    <li style={listItemStyle}>Positive Attitude</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;
