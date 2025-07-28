import React from 'react';

import { Education, Home, About, Experience, Skills, Contact, Projects, Playground } from "./index"


const PortfolioHome = () => {
    return (
        <>
            <div id="home">
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="education">
                <Education />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="skills">
                <Skills />
            </div>
            {/* <div id="playground">
                <Playground />
            </div> */}
            <div id="contact">
                <Contact />
            </div>
        </>
    );
}

export default PortfolioHome
