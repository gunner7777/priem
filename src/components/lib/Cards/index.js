import React from 'react';
import PropTypes from 'prop-types';
import CardsDesc from './CardsDesc';
import CardsImg from './CardsImg';
import './Cards.css';

const Cards = props => {
  return (
    <div className="Cards">
      {props.children}
    </div>
  );
}

Cards.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ])
}

export {
  Cards,
  CardsImg,
  CardsDesc
};