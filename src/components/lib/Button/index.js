import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import './Button.media.css';

/*
props:
  'modClass' additional class
  'disabled'
  'children'
  'handleClick' function from parent
*/

const Button = props => {
  const additionalClassName = props.modClass !== undefined ? ` ${props.modClass}` : "";
  return (
    <button
      type='button'
      className={`TheButton${additionalClassName}`}
      disabled={props.disabled && 'disabled'}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  modClass: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  disabled: false
}

export default Button;