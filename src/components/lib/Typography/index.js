import React from 'react';
import PropTypes from 'prop-types';
import './Typography.css';
import './Typography.media.css';

/*
props
  variant: title, text
  tag: p, h1, h2, h3, ...
  modClass
*/

const Typography = props => {
  const tag = props.tag ? props.tag : 'p';
  const style = [];
  if(props.variant === 'title') {
    style.push('Typography-Title');
  } else if (props.variant === 'text') {
    style.push('Typography-Text');
  }
  props.modClass ? style.push(props.modClass) : null;

  return (
      React.createElement(
        tag,
        {className: style.join(' ')},
        props.children
      )
  );
}

Typography.propTypes = {
  variant: PropTypes.string,
  tag: PropTypes.string,
  modClass: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Typography;