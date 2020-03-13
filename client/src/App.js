import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { CatsMatch } from './components/CatsMatch.js';
import { ScoresCat } from './components/ScoresCat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={CatsMatch} />
        <Route path="/ScoresCat" component={ScoresCat} />
      </div>
    </Router>
  );
}

export default App;
