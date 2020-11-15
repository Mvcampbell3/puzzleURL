import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './correct.css';
import destinations from '../../../core/constants';

const Correct = (props) => {
  const {
    setSubSent,
    nextRoute,
    setCorrectRoutes
  } = props;

  useEffect(() => {
    setSubSent(false);
  }, [setSubSent])

  useEffect(() => {
    if (destinations[nextRoute.toUpperCase()] !== undefined) {
      setCorrectRoutes(prevVal => {
        const hasStep = prevVal.find(place => place.step === destinations[nextRoute.toUpperCase()]);
        if (!hasStep) {
          console.log('new step added to corrects')
          const newCorrects = [...prevVal, { route: nextRoute, step: destinations[nextRoute.toUpperCase()] }];
          return newCorrects;
        }
        console.log('has already been to this place')
        return prevVal;
      })
    }
  }, [nextRoute, destinations, setCorrectRoutes])

  return (
    <div className="correct-container">
      <h1>You were correct!</h1>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default Correct;