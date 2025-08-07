import React from 'react';
import '../assets/home.css';

import {
    GitHubIcon,
    LinkedInIcon,
    PythonIcon,
    DjangoIcon,
    PostgresIcon,
    RedisIcon,
    DockerIcon,
    IotIcon,
    MySQL,
    CiCd,
    JavaScript,
    TypeScript,
    SvelteKit,
} from './Icons';

const centeredStyle = {
    textAlign: 'center'
}

const Home = () => {
    return (
        <div className='container'>
            <section id="home" className="home-section">
                <p style={{ ...centeredStyle, marginBottom: '2rem', fontSize: '1.1em', color: '#555' }}>
                    "Tell me and I forget. Teach me and I remember. Involve me and I learn."
                    <br /><i>— Benjamin Franklin</i>
                </p>

                <div className="home-content">

                    <div className="home-header-row">
                        <div className="home-text-intro">
                            <h2>Copenhagen-Based Software Engineer | Product Owner</h2>
                        </div>

                        <div className="home-image-block">
                            <img
                                src="faisal.png"
                                alt="Faisal Akhlaq - Software Engineer"
                                className="profile-image"
                                loading="lazy"
                            />
                            <div className="social-links">
                                <a href="https://github.com/faisalakhlaq" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className="social-icon" />
                                </a>
                                <a href="https://linkedin.com/in/faisalakhlaq" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon className="social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="home-description-block">
                        <p className="home-description">
                            Specializing in Python (Django/Flask) and JavaScript (SvelteKit), I build robust, automated systems and real-time solutions. Proven expertise in DevOps, Docker, and delivering high-quality software in complex environments.
                        </p>
                    </div>

                    <div className="tech-stack">
                        <span>Core Technologies:</span>
                        <div className="tech-icons">
                            <PythonIcon className="tech-icon" />
                            <DjangoIcon className="tech-icon" />
                            <JavaScript className="tech-icon" />
                            <TypeScript className="tech-icon" />
                            <SvelteKit className="tech-icon" />
                            <PostgresIcon className="tech-icon" />
                            <MySQL className='tech-icon' />
                            <RedisIcon className="tech-icon" />
                            <DockerIcon className="tech-icon" />
                            <CiCd className="tech-icon" />
                            <IotIcon className="tech-icon" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
