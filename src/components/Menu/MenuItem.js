import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = props => {
  return (
    <li>
      <Link
        className="Menu-Link"
        to={props.link}
      >
        {props.children}
      </Link>
    </li>
  );
}

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default MenuItem;