import React from 'react';

const bulletMarginStyle = {
    marginLeft: "2rem"
}
const About = () => {
    return (
        <div className='base-container'>
            <h1 style={{ textAlign: "center" }}>About me</h1>
            <p style={{ textAlign: "center", marginBottom: '2rem', fontSize: '1.1em', color: '#555' }}>
                "Mastery lies on an infinite continuum, and as a result we will never reach the end.
                We can, however, see to it that we are as far along that continuum as our circumstance allows."
                <br /><i>— Chris Matakas</i>
            </p>

            <p>Hej!</p> <br />
            <p style={{ textAlign: "justify" }}>
                Welcome to my portfolio. I'm Faisal Akhlaq, a Software Engineer based in Copenhagen. My journey in software development is driven by a passion for crafting robust, user-friendly applications that adhere to best practices. I thrive on bridging the gap between complex technical challenges and clear project execution, ensuring high-quality software delivery.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
                I specialize in developing backend services and real-time systems, leveraging Python (Django, Flask) and JavaScript/TypeScript (SvelteKit, React). My experience includes building automated production systems with MQTT and WebSockets, designing intricate inventory tracking modules, and implementing sophisticated SVG processing workflows. I am also adept in DevOps practices, utilizing Docker and GitHub Actions for efficient continuous delivery in diverse environments.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
                Beyond the code, I enjoy exploring new technologies, following tech and business podcasts, and staying active with fitness and sports. I believe in continuous learning and applying new insights to deliver impactful software solutions. I'm always open to new challenges and collaborations.
            </p>
            <br />
            <h3>Experience</h3>
            <div>
                <ol style={bulletMarginStyle}>
                    <li> Software Engineer at "Rodinia Generation" - 2025 </li>
                    <li> Django-Python Developer (Part Time) at "Ticketbutler Copenhagen" - 2018 </li>
                    <li> Java Software Developer at "Korgix" - 2014 </li>
                    <li> Java Developer Intern at "Simus-Systems GmbH" - 2012 </li>
                </ol>
            </div>
            <br />
            <h3>Languages</h3>
            <div>
                <ol style={bulletMarginStyle}>
                    <li> English - Professional Proficiency </li>
                    <li> Danish - Fluent in spoken and reading, Intermediate in writing </li>
                    <li> Urdu - Native </li>
                    <li> Punjabi - Fluent </li>
                </ol>
                <pre className="tab"></pre>
            </div>
        </div>
    );
}

export default About
