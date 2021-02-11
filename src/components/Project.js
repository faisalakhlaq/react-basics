const imgStyle = {
    maxWidth: '17rem',
}
const projectCardStyle = {
    textAlign: 'center',
    alignItems: 'center',
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