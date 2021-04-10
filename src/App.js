import React from 'react';
import { Game } from './Game';
import './App.css';

import { SudokuProvider } from './context/SudokuContext';

export const App = () => {
  return (
    <SudokuProvider>
      <Game />
    </SudokuProvider>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
