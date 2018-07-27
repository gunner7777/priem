import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

const Select = props => {
  const selectOptions = props.options.map((item, index) => {
    return (
     <option key={index} value={item}>{item}</option>
    );
  });

  return (
    <div>
      <label>{props.label}<br />
        <select onChange={props.changeValue}>
          {selectOptions}
        </select>
      </label>
    </div>
  );
}

Select.propTypes = {
  
}

export default Select;