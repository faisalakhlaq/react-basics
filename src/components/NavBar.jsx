import React from 'react';

import '../assets/navbar.css';

const NavBar = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="navContainer">
            <nav>
                <a className="navLink" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                <a className="navLink" href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                <a className="navLink" href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
                <a className="navLink" href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
                <a className="navLink" href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
                <a className="navLink" href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
                <a className="navLink right" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                {/* <a className="navLink right" href="#playground" onClick={(e) => { e.preventDefault(); scrollToSection('playground'); }}>
                    Playground
                </a> */}
            </nav>
        </div>
    );
}

export default NavBar;
