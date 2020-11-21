import React from "react";
import answers from '../../core/constants';
import Answer from '../../core/Answer';
const Hint = (props) => {
    const { step } = props;
    const answerList = answers.map(answer => new Answer(answer));
    return (
        <div className="puzzle-container">
            <h1 className="puzzle-title">Welcome</h1>
        </div>
    );
};

export default Hint;
