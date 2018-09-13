import React from 'react';
import PropTypes from 'prop-types';

const CardsDesc = props => {
  return (
    <div className='Cards-Desc'>
      {props.children}
    </div>
  );
}

CardsDesc.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ])
}

export default CardsDesc;