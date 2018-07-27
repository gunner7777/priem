import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const InfoItem = props => {
  return (
    <div className="InfoList-Item">
      <FontAwesomeIcon icon={faAngleRight} className="InfoList-Icon" />
      <a
        className="InfoList-Link"
        href={props.link}
        target="_blank"
      >
        {props.children}
      </a>
    </div>
  )
}

InfoItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default InfoItem;