import React from 'react';
import PropTypes from 'prop-types';

const SelectItems = props => {
  const selectItems = props.items.map((item, index) => {
    return (
      <p
        id={props.idSelect}
        className="Select-Item"
        key={index}
        onClick={props.handleClick}
      >
        {item}
      </p>
    );
  });

  return (
    <div className="Select-Items">
      {selectItems}
    </div>
  )
}

SelectItems.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.any
  }),
  handleClick: PropTypes.func
}

export default SelectItems;