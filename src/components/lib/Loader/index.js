import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loader.css';


const Loader = () => {
  return (
    <div className="Loader-Outer">
      <FontAwesomeIcon icon={faSpinner} className="Loader"/>
    </div>
  );
}

export default Loader;