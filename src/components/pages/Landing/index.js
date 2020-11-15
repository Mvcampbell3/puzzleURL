import React, { useState, useEffect } from 'react';
import './landing.css';
import { Redirect } from 'react-router-dom';

const Landing = (props) => {
  const [nextRoute, setNextRoute] = useState("");
  const [sendRedirect, setSendRedirect] = useState(false);
  const [subSent, setSubSent] = useState(false);

  useEffect(() => {
    if (subSent) {
      setNextRoute(prevValue => {
        return prevValue.split(" ").join("");
      })
    }
  }, [subSent])

  useEffect(() => {
    if (subSent && !nextRoute.includes(" ")) {
      console.log('this is called')
      setSendRedirect(true)
    }
  }, [subSent, nextRoute])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubSent(true);
  }

  return (
    <div className="landing-container">
      {sendRedirect && <Redirect to={`/${nextRoute}`} />}
      <form onSubmit={e => handleSubmit(e)}>
        <h1>This is the landing container</h1>
        <div className="input-group">
          <label htmlFor="route" className="input-label">New Route</label>
          <input
            type="text"
            name="route"
            id="route"
            className="input"
            value={nextRoute}
            onChange={(e) => setNextRoute(e.target.value)}
          />
        </div>
        <div className="input-group">
          <button className="btn btn-submit" onClick={(e) => handleSubmit(e)}>Go!</button>
        </div>
      </form>
    </div>
  )
}

export default Landing;
