import { Link } from "react-router-dom";
import './navbar.css';

const NavBar = () => {
    return (
        <div className="navContainer">
            <nav>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/about">About</Link>
                <Link className="navLink" to="/projects">Projects</Link>
                <Link className="navLink" to="/skills">Skills</Link>
                <Link className="navLink" to="/contact">Contact</Link>
                <Link className="navLink right" to="/playground">
                    Playground</Link>
            </nav>
        </div>      
    )
}

export default NavBar