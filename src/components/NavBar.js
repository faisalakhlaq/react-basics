import { Route, Link } from "react-router-dom";
import Todo from "./Todo.js"

const navBarStyle = {
    background: 'steelblue',
    height: '2rem',
    width: '100%',
  };

const NavBar = () => {
    return (
        <div style={navBarStyle}>
            <nav>
                <Link to="/">Home</Link>
                |
                <Link to="/about">About</Link>
                |
                <Link to="/projects">Projects</Link>
                |
                <Link to="/contact">Contact</Link>
                |
                <Link to="/playground">Playground</Link>
            </nav>
            <Route
                path="/playground"
                component={Todo}
            />
        </div>      
    )
}

export default NavBar