import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Page Imports
import Landing from './components/pages/Landing';
import Wrong from './components/pages/Wrong';
import Correct from './components/pages/Correct';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [nextRoute, setNextRoute] = useState("");
  const [correctRoutes, setCorrectRoutes] = useState([]);
  const [subSent, setSubSent] = useState(false);

  useEffect(() => {
    if (subSent) {
      setNextRoute(prevValue => {
        return prevValue.split(" ").join("");
      })
    }
  }, [subSent])

  const newProps = useMemo(() => {
    return {
      currentStep,
      setCurrentStep,
      nextRoute,
      setNextRoute,
      subSent,
      setSubSent,
      correctRoutes,
      setCorrectRoutes
    }
  }, [currentStep,
    setCurrentStep,
    nextRoute,
    setNextRoute,
    subSent,
    setSubSent,
    correctRoutes,
    setCorrectRoutes
  ]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Landing {...newProps} />} />
          <Route exact path="/baseball" render={() => <Correct {...newProps} />} />
          <Route exact path="/test" render={() => <Correct {...newProps} />} />
          <Route path="*" render={() => <Wrong {...newProps} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
