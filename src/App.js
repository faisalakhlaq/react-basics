import {BrowserRouter, Route, Switch} from "react-router-dom";

import NavBar from './components/NavBar.js'
import {PortfolioHome, About, Skills, Contact, Projects, Footer, Todo } from "./components"

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
            <Route exact={true} path="/playground" component={Todo}/>
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;