import React from 'react';
import PropTypes from 'prop-types';

const CardsImg = props => {
  return (
    <div className="Cards-Img">
      {props.children}
    </div>
  );
}

CardsImg.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ])
}

export default CardsImg;