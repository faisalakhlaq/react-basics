import React from 'react';
import { GitHubIcon, LinkedInIcon } from './Icons';

import '../assets/home.css';

const socialIconStyle = {
    width: '35px',
    height: '35px',
    padding: '.4rem',
    borderRadius: '50%',
    margin: '0 10px',
};

const centeredStyle = {
    textAlign: 'center',
    margin: ".5rem"
};

const justifiedStyle = {
    textAlign: 'justify',
    maxWidth: '650px',
    margin: '0 auto 25px auto',
    lineHeight: '1.6'
};

const Contact = () => {
    const emailAddress = "Faisal.Akhlaq@aol.com";

    return (
        <div id="contact" className="base-container" style={{ padding: "2em", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <h1 style={{ textAlign: "center", fontSize: "2.5em", marginBottom: "1em", color: "#333" }}>Get in Touch</h1>

            <p className="contact-me-text" style={justifiedStyle}>
                I'm always eager to connect with fellow professionals, discuss new opportunities, or collaborate on exciting projects.
                Whether you have a question, a project idea, or just want to say hello, please don't hesitate to reach out.
            </p>

            <div style={centeredStyle}>
                <a
                    href={`mailto:${emailAddress}`}
                    style={{
                        display: 'inline-block',
                        padding: '14px 30px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        fontSize: '1.2em',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s ease-in-out',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    }}
                >
                    Email Me: {emailAddress}
                </a>
            </div>

            <div className="social-links">
                <a href="https://github.com/faisalakhlaq" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/faisalakhlaq" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="social-icon" />
                </a>
            </div>

        </div>
    );
}

export default Contact;
