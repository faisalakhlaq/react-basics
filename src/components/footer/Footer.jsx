import { GitHubIcon, LinkedInIcon } from "../Icons"
import "./footer.css"

const Footer = () => {
    return (
        <div className='footerContainer'>
            {/* <a href="https://github.com/faisalakhlaq" target="_blank" title="Github account of Faisal" rel="noreferrer">
                <img  className='socialIconStyle' src="github-icon.png" /></a>

            <a href="https://www.linkedin.com/in/faisalakhlaq/" target="_blank" title="Linkedin Profile of Faisal" rel="noreferrer">
                <img  className='socialIconStyle' src="linkedin-icon.png" /></a> */}

            <a href="https://github.com/faisalakhlaq" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/faisalakhlaq" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="social-icon" />
            </a>

            <li>&#169; Faisal Akhlaq (2025)</li>
        </div>
    )
}

export default Footer
