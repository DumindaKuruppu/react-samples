import React from 'react';
import './App.css';
import Final from './Components/Final';
import Fun from './Components/Fun';
import GuageChart from "./Components/GuageChart";
import MySortableTree from "./Components/SortableTree";
import LearnCSS from "./Components/LearnCSS";
import TicTacToe from "./Components/TicTacToe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Final/>*/}
        {/*  <Fun/>*/}
        {/*  <MySortableTree/>*/}
        {/*  <LearnCSS/>*/}
          <TicTacToe/>
      </header>
    </div>
  );
}

export default App;
