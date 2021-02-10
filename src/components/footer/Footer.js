import "./footer.css"

const Footer = () => {
    return (
        <div className='footerContainer'>
            <a href="https://github.com/faisalakhlaq" target="_blank" title="Github account of Faisal">
                <img  className='socialIconStyle' src="github-icon.png" /></a>

            <a href="https://www.linkedin.com/in/faisalakhlaq/" target="_blank" title="Linkedin Profile of Faisal">
                <img  className='socialIconStyle' src="linkedin-icon.png" /></a>

            <a href="http://pallandri.blogspot.com/" target="_blank" title="Blog">
                <img  className='socialIconStyle' src="blogger-icon.png" /></a>

            <h4>Related Websites</h4>
            <li><a href='https://www.mobiletilbud.dk'>MobileTilbud</a></li>
            <li><a href='https://stockgraphicaldata.herokuapp.com'>Stock & Crypto</a></li>
            <li>&#169; Faisal Akhlaq</li>
        </div>
    )
}

export default Footer