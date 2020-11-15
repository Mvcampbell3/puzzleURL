import React, { useState, useMemo } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Page Imports
import Landing from './components/pages/Landing';
import Wrong from './components/pages/Wrong';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const newProps = useMemo(() => {
    return {
      currentStep,
      setCurrentStep
    }
  }, [currentStep, setCurrentStep]);



  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Landing {...newProps} />} />
          <Route path="*" render={() => <Wrong {...newProps} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
