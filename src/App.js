import {BrowserRouter, Route, Switch} from "react-router-dom";

import NavBar from './components/NavBar.js'
import {PortfolioHome, About, Skills, Contact, Projects } from "./components"

const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact={true} path="/"  component={PortfolioHome} />
            <Route exact={true} path="/about"  component={About} />
            <Route exact={true} path="/skills"  component={Skills} />
            <Route exact={true} path="/projects"  component={Projects} />
            <Route exact={true} path="/contact"  component={Contact} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;