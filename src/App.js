import { BrowserRouter } from "react-router-dom"

import NavBar from './components/NavBar.js'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;