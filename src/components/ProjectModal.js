import '../modal.css';
import Button from './Button'

const ProjectModal = ({ handleClose, show, project }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const centeredStyle = {
      textAlign: "center"
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className='p-description'>
            <h3 style={centeredStyle}>
              {project.title}
            </h3>
            <p>
              {project.description}
            </p>
            <p style={centeredStyle}>  
              <h5>Tools Used</h5>        
              {project.tools}
            </p>
            <p style={centeredStyle}>
              <Button 
              color={'red'} 
              text={'Close'}
              onClick={handleClose} />
             <a href={project.link} target='blank'>Link to project</a> 
            </p>
          </div>
          <img className="p-image" src={project.image}></img>
        </section>
      </div>
    );
  };

  export default ProjectModal