const imgStyle = {
    width: '20rem',
}
const projectCardStyle = {
    textAlign: 'center',
    margin: '2rem'
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

Project.defaultProps = {
    textAlign: 'right',
    backgroundColor: 'steelblue'
}

export default Project 