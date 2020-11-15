import React, { useState, useEffect } from 'react';
import './landing.css';
import { Redirect } from 'react-router-dom';

const Landing = (props) => {

  const { nextRoute, setNextRoute, subSent, setSubSent } = props;

  const [useRedirect, setUseRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubSent(true)
  }

  useEffect(() => {
    setSubSent(false)
  }, [setSubSent])

  useEffect(() => {
    if (subSent && !nextRoute.includes(" ")) {
      setUseRedirect(true)
    }
  }, [subSent, nextRoute])

  return (
    <div className="landing-container">
      {useRedirect && <Redirect to={`/${nextRoute}`} />}
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
