import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const InfoItem = props => {
  return (
    <div className='InfoList-Item'>
      <FontAwesomeIcon icon={faAngleRight} className='InfoList-Icon' />
      <Link
        onClick={props.getInfo}
        className='InfoList-Link'
        data-link={props.link}
        to='/viewer'
      >
        {props.children}
      </Link>
    </div>
  )
}

InfoItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default InfoItem;