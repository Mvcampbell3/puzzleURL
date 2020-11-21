import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import storage from './core/storage'
import destinations from './core/constants';

// Page Imports
import { Landing } from './components/pages/Landing';
import { Wrong } from './components/pages/Wrong';
import { Correct } from './components/pages/Correct';

// Component Imports
import BreadCrumbs from './components/common/BreadCrumbs'

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [nextRoute, setNextRoute] = useState("");
  const [correctRoutes, setCorrectRoutes] = useState([]);
  const [subSent, setSubSent] = useState(false);

  const { getLocalStorage, clearLocalStorage } = storage;

  useEffect(() => {
    if (subSent) {
      setNextRoute(prevValue => {
        return prevValue.split(" ").join("");
      })
    }
  }, [subSent])

  useEffect(() => {
    const currentStorage = getLocalStorage();
    console.log(currentStorage)
    if (currentStorage) {
      let tempArr = [];
      for (let route in currentStorage) {
        if (destinations[route] === currentStorage[route]) {
          tempArr.push({ route: route.toLowerCase(), place: currentStorage[route] })
        }
      }
      setCorrectRoutes(tempArr)
    }
  }, [])

  const clearStorageAndLinks = () => {
    clearLocalStorage();
    setCorrectRoutes([]);
  }

  const newProps = useMemo(() => {
    return {
      currentStep,
      setCurrentStep,
      nextRoute,
      setNextRoute,
      subSent,
      setSubSent,
      correctRoutes,
      setCorrectRoutes,
      clearStorageAndLinks
    }
  }, [currentStep,
    setCurrentStep,
    nextRoute,
    setNextRoute,
    subSent,
    setSubSent,
    correctRoutes,
    setCorrectRoutes,
    clearStorageAndLinks
  ]);

  return (
    <div className="App">
      <Router>
        <BreadCrumbs {...newProps} />
        <Switch>
          <Route exact path="/"><Landing {...newProps} /></Route>
          <Route exact path="/baseball" render={() => <Correct {...newProps} />} />
          <Route exact path="/test" render={() => <Correct {...newProps} />} />
          <Route exact path="/golf" render={() => <Correct {...newProps} />} />
          <Route exact path="/jackson" render={() => <Correct {...newProps} />} />
          <Route exact path="/marcus" render={() => <Correct {...newProps} />} />
          <Route exact path="/bisping" render={() => <Correct {...newProps} />} />
          <Route path="*" render={() => <Wrong {...newProps} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
