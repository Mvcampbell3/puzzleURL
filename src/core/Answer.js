class Answer {
    constructor({answer, step, heading, clue}) {
        this.answer = answer;
        this.step = step;
        this.heading = heading;
        this.clue = clue;
    }
    get displayAnswer() {
        return this.capitalizeWord()
    }

    get importantLetter() {
        return this.sliceLetter();
    }

    capitalizeWord() {
        return this.answer.charAt(0).toUpperCase() + this.answer.slice(1); 
    }

    sliceLetter() {
        return this.answer.charAt(0).toUpperCase();
    }

    
}

export default Answer;