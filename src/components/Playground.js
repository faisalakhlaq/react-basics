import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
// import Todo from "./Todo";
// import CodilityLessons from "./CodilityLessons"
// import Weather from './Weather'

const Playground = () => {
    return (
        // <BrowserRouter>
        <div className='base-container'>
            <h1>Small Apps</h1>
            <li><Link className="" to="/todo">Todo App</Link></li>
            <li><Link className='' to="/weather">Weather</Link></li>
            <li><Link className='' to="/codilitylessons">Codility Lessons</Link></li>
            <li><Link className='' to="/tic-tac-toe">TicTacToe Game</Link></li>
            <hr />

            {/* <Switch>
                <Route path="/weather" component={Weather}/>
                <Route path="/todo" component={Todo}/>
                <Route path="/codilitylessons" component={CodilityLessons}/>
            </Switch> */}
        </div>
        // </BrowserRouter>
    );
}

export default Playground