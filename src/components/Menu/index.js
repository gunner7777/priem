import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import './Menu.css';

const Menu = props => {
  const menu = props.items.map((mi,index) => {
    return (
      <MenuItem
        key={index}
        link={mi.link} >
        {mi.name}
      </MenuItem>
    )
  });
  return (
    <ul className="Menu">
      {menu}
    </ul>
  );
}

Menu.propTypes = {
  items: PropTypes.array
}

export default Menu;