import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faNewspaper, faMarker, faUser, faUserGraduate, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import './Badge.css';

const Badge = (props) => {
  let getIcons = (icon) => {
    let currIcon;
    switch(icon) {
      case 'faHome':
        currIcon = faHome;
        break;
      case 'faBook':
        currIcon = faBook;
        break;
      case 'faNewspaper':
        currIcon = faNewspaper;
        break;
      case 'faMarker':
        currIcon = faMarker;
        break;
      case 'faUser':
        currIcon = faUser;
        break;
      case 'faUserGraduate':
        currIcon = faUserGraduate;
        break;
      case 'faAddressBook':
        currIcon = faAddressBook;
        break;
      default: break;
    }

    return (
      <FontAwesomeIcon
        icon={currIcon}
        className='Badge-Icon'
      />
    );
  }

  return (
    <div className='Badge'>
      <Link
        className='Badge-Link Text_Center Flex'
        to={props.linkPath}
      >
        <div className='Badge-IconOuter'>
          {getIcons(props.iconPath)}
        </div>
        <div className='Badge-Text'>
          {props.namePath}
        </div>
      </Link>
    </div>
  );
};


export default Badge;