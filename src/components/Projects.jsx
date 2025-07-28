import React from 'react';
// Projects maps through the projects which are provided in a json file.
// Each project is displayed as a card
import { useState } from 'react'

import data from '../../src/data_files/projects.json'
import Project from './Project.jsx'
import ProjectModal from './ProjectModal.jsx'

const Projects = () => {

    const [showProjectInModal, setShowModal] = useState(false)
    const [modalProject, setModalProject] = useState('')
  
    const showModal = (task) => {
      setModalProject(task);
      setShowModal(true);
    };
  
    const hideModal = () => {
      setShowModal(false);
    };

    const centeredStyle = {
      textAlign: 'center'
    }

    const projectContainer = {
        display:"flex", 
        flexWrap: 'wrap', 
        justifyContent: 'center'
    }

    return (
        <div className='base-container'>
            <h1 style={centeredStyle}>Projects</h1>
            <div  style={projectContainer}>
            {
                data.map((project) => (
                    <Project 
                        key={project.id} 
                        project={project}
                        onClick={showModal}
                        />
                ))
            }
            </div>
            {showProjectInModal && <ProjectModal 
            show={showProjectInModal} 
            handleClose={hideModal}
            project={modalProject}> 
          </ProjectModal>}
        </div>
    );

}

export default Projects