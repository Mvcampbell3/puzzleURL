import React, { useCallback, useEffect } from 'react';
import './landing.css';
import PropTypes from 'prop-types';
import BreadCrumbs from '../../common/BreadCrumbs';
import LandingForm from './LandingForm';

import answers from '../../../core/constants';

// Answer Pages Imports
import Hint from '../../puzzles/Hint';


const Landing = (props) => {

  const {
    step,
    setStep,
    level,
    setLevel,
    guess,
    setGuess
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="landing-container">
      <BreadCrumbs {...props} />
      <div className="landing-page">
        <LandingForm {...props} />
        <Hint {...props} />
      </div>
    </div>
  )
}

Landing.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  level: PropTypes.string.isRequired,
  setLevel: PropTypes.func.isRequired,
  guess: PropTypes.string.isRequired,
  setGuess: PropTypes.func.isRequired
}

export default Landing;