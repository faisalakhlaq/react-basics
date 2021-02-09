import '../modal.css';

const Modal = ({ handleClose, show, children, task }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {/* {children} */}
          <h3>
            {task.text}
          <img src={task.image}
                style={{'width':'30rem', 'float':'right'}}></img>
          </h3>
          <button type="button" onClick={handleClose}> 
          {/* style={{'float':'right'}}> */}
            Close
          </button>
        </section>
      </div>
    );
  };

  export default Modal