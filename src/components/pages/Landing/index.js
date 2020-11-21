import React, { useCallback, useEffect } from 'react';
import './landing.css';
import PropTypes from 'prop-types';
import BreadCrumbs from '../../common/BreadCrumbs';
import LandingForm from './LandingForm';
import Space from '../../puzzles/Space';
import Baseball from '../../puzzles/Baseball';

const Landing = (props) => {

  const {
    step,
    setStep,
    level,
    setLevel,
    guess,
    setGuess
  } = props;

  const setDisplay = useCallback((inProps) => {
    switch (step) {
      case 1:
        return <Baseball {...inProps} />
      case 0:
      default:
        return <Space {...inProps} />
    }
  }, [step])

  useEffect(() => {
    const acceptedAnswers = ['space', 'baseball'];
    if (acceptedAnswers.indexOf(guess) !== -1) {
      setStep(acceptedAnswers.indexOf(guess) + 1)
      setGuess('');
    }
  }, [guess])



  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="landing-container">
      <BreadCrumbs {...props} />
      <div className="landing-page">
        <LandingForm {...props} />
        {setDisplay(props)}
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