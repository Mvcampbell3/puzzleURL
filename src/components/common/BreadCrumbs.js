import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumbs = (props) => {
  const { correctRoutes } = props;
  return (
    <div className="breadcrumbs-container">
      <ul className="link-holder">
        {correctRoutes.sort((a, b) => a.place - b.place).map((route, i) =>
          <li key={`breadLink${i}`}>
            <Link to={`/${route.route}`}>{route.route}</Link>
          </li>
        )}
      </ul>

    </div>
  );
}

export default BreadCrumbs;