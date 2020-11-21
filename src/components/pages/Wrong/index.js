import React from 'react';
import { Link } from 'react-router-dom';

const Wrong = (props) => {
  return (
    <div className="wrong-container">
      <h1>You were wrong</h1>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Wrong; 