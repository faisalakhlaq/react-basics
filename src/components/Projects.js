// Projects maps through the projects which are provided in a json file.
// Each project is displayed as a card
import { useState } from 'react'

import data from '../../src/data_files/projects.json'
import Project from './Project.js'
import Modal from './TaskModal.js'

const Projects = () => {

    const [showTaskInModal, setShowModal] = useState(false)
    const [modalTask, setModalTask] = useState('')
  
    const showModal = (task) => {
      setModalTask(task);
      setShowModal(true);
    };
  
    const hideModal = () => {
      setShowModal(false);
    };

    return (
        <div className='container'>
            {
                data.map((project) => (
                    <Project 
                        key={project.id} 
                        project={project}
                        onClick={showModal}
                        />
                ))
            }
            {showTaskInModal && <Modal 
            show={showTaskInModal} 
            handleClose={hideModal}
            task={modalTask}> 
            <p>Task: {modalTask.text}</p>
            <p>Date: {modalTask.day}</p>
            <p>Remind: {modalTask.reminder}</p>
          </Modal>}
        </div>
    );
}

export default Projects