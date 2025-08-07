import React from 'react';
import '../modal.css';
import Button from './Button';

const ProjectModal = ({ handleClose, show, project }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className='description-container'>
          <h3 className='project-heading-text'>
            {project.title}
          </h3>
          <p className='p-description'>
            {project.description}
          </p>
          <div className='skills-tools-container'>
            <div className='skills-tools-text'>
              <p className="skills-tools-heading">Tools Used</p>
              {project.tools.join(', ')}
            </div>
            {project.skills && < hr />}
            {project.skills &&
              <div className="skills-tools-text">
                <p className="skills-tools-heading">Skills</p>
                {project.skills?.join(', ')}
              </div>}
          </div>

          {project.warnings?.length > 0 && (
            <div className="warning-list" style={centeredStyle}>
              <h5>⚠️ Important Note</h5>
              <ul style={{ listStylePosition: 'inside', paddingLeft: 0 }}>
                {project.warnings.map((warning, index) => (
                  <li key={index}>{warning}</li>
                ))}
              </ul>
            </div>
          )}

          <p style={centeredStyle}>
            <Button
              color={'blue'}
              text={'Close'}
              onClick={handleClose} />
            <br />
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              Link to project
            </a>
          </p>
        </div>
        <img className="p-image" src={project.image} alt={project.title || "Project image"} />
      </section>
    </div>
  );
};

export default ProjectModal;

const centeredStyle = {
  textAlign: "center",
};
