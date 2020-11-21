import React from "react";
import PropTypes from "prop-types";

const LandingForm = (props) => {
    const { step, setStep, guess, setGuess, level, setLevel } = props;
    return (
        <div className="landing-form-container">
            <div className="input-group">
                <label htmlFor="guess" className="input-label">
                    Enter your guess
                </label>
                <input
                    type="text"
                    name="guess"
                    id="guess"
                    className="guess-input"
                    onChange={(e) => setGuess(e.target.value)}
                    value={guess}
                />
            </div>
        </div>
    );
};

LandingForm.propTypes = {
    step: PropTypes.number.isRequired,
    setStep: PropTypes.func.isRequired,
    level: PropTypes.string.isRequired,
    setLevel: PropTypes.func.isRequired,
    guess: PropTypes.string.isRequired,
    setGuess: PropTypes.func.isRequired,
};

export default LandingForm;
