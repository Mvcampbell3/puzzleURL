import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './correct.css';
import destinations from '../../../core/constants';
import storage from '../../../core/storage';

const Correct = (props) => {
  const {
    setSubSent,
    nextRoute,
    setCorrectRoutes
  } = props;

  const { setLocalStorage } = storage;

  useEffect(() => {
    setSubSent(false);
  }, [setSubSent])

  useEffect(() => {
    if (destinations[nextRoute.toUpperCase()] !== undefined) {
      setLocalStorage({ route: nextRoute.toUpperCase(), place: destinations[nextRoute.toUpperCase()] })
      setCorrectRoutes(prevVal => {
        return [...prevVal, { route: nextRoute, place: destinations[nextRoute.toUpperCase()] }]
      })
    }
  }, [nextRoute, setCorrectRoutes, setLocalStorage])

  return (
    <div className="correct-container">
      <h1>You were correct!</h1>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default Correct;