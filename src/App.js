import {BrowserRouter, Route, Switch} from "react-router-dom";

import {PortfolioHome, About, Skills, Contact, Projects, NavBar, Footer, Todo, Playground, CodilityLessons, Weather, TicTacToe } from "./components"

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
            <Route exact={true} path="/playground" component={Playground}/>

            <Route exact={true} path="/weather" component={Weather}/>
            <Route exact={true} path="/todo" component={Todo}/>
            <Route exact={true} path="/codilitylessons" component={CodilityLessons}/>
            <Route exact={true} path="/tic-tac-toe" component={TicTacToe} />
            
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;