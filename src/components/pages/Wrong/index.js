import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Wrong = (props) => {
  const { setCurrentStep } = props;
  useEffect(() => {
    setCurrentStep(prevVal => {
      return prevVal + 1;
    })
  }, [setCurrentStep])
  return (
    <div className="wrong-container">
      <h1>You were wrong</h1>
      <p>You have {props.currentStep} place</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Wrong;