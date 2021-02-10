import { Route, Link } from "react-router-dom";
import About from "./About.js"
import Todo from "./Todo.js"
import PortfolioHome from "./PortfolioHome"
import Projects from "./Projects.js"

const navBarStyle = {
    background: 'steelblue',
    height: '50px',
    width: '100%',
  };

const NavBar = () => {
    return (
        <div style={navBarStyle}>
            <nav>
                <Link to="/home">Home</Link>
                |
                <Link to="/about">About</Link>
                |
                <Link to="/projects">Projects</Link>
                |
                <Link to="/playground">Playground</Link>
            </nav>
            <Route
                path="/home"
                component={PortfolioHome}
            />
            <Route
                path="/about"
                component={About}
            />
            <Route
                path="/projects"
                component={Projects}
            />
            <Route
                path="/playground"
                component={Todo}
            />
        </div>      
    )
}

export default NavBar