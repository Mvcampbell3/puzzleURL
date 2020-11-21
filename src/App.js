import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page Imports
import Landing from "./components/pages/Landing";

function App() {
    const [step, setStep] = useState(1);
    const [level, setLevel] = useState("start");
    const [guess, setGuess] = useState("");

    const myProps = {
        step,
        setStep,
        level,
        setLevel,
        guess,
        setGuess,
    };

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="*">
                        <Landing {...myProps} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
