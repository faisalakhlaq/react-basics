import React from 'react';

import './App.css';

import {
  PortfolioHome,
  NavBar,
  Footer,
} from "./components";

function App() {
  return (
    <div>
      <NavBar />
      <PortfolioHome />
      <Footer />
    </div>
  );
}

export default App;
