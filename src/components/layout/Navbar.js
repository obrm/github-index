import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <i className={icon} />
        <Link to="/">{title}</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">בית</Link>
        </li>
        <li>
          <Link to="/about">אודות</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'אינדקס גיטהאב',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
