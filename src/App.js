import React from 'react';

import Player from './components/Player';
import Logo from './components/Logo';
import Details from './components/Details';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Player>
        <Logo />
        <Details />
      </Player>
    </div>
  );
}

export default App;
