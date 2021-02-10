const imgStyle = {
    width: '20rem',
}
const projectCardStyle = {
    textAlign: 'center',
    margin: '2rem',
    cursor: 'pointer'
}
const Project = ({project, onClick}) => {
    return (
        <div style={projectCardStyle} onClick={() => onClick(project)}>
            {project.title}
            <br />
            <img src={project.image} style={imgStyle}></img>
        </div>
    )
}

export default Project 