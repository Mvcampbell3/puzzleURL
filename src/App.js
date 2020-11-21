import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Page Imports
import Landing from './components/pages/Landing';
import Wrong from './components/pages/Wrong';

function App() {

  const [step, setStep] = useState(0);
  const [level, setLevel] = useState('start');
  const [guess, setGuess] = useState('');

  const myProps = {
    step, setStep, level, setLevel, guess, setGuess
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Landing {...myProps} /></Route>
          <Route path="*" render={() => <Wrong {...myProps} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
