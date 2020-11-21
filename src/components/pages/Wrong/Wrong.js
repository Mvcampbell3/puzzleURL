import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Wrong = (props) => {
  const { setCurrentStep, setSubSent } = props;
  useEffect(() => {
    setCurrentStep(prevVal => {
      setSubSent(false);
      return prevVal + 1;
    })
  }, [setCurrentStep, setSubSent]);

  return (
    <div className="wrong-container">
      <h1>You were wrong</h1>
      <p>You have {props.currentStep} place</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Wrong;