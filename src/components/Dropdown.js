import React from 'react';
import '../assets/css/style.css';



function Dropdown(props) {
  return (
    <div className="field-div">
        <lablel className="label">{props.label}</lablel>
        <select type="text" name={props.selectName} className="custom-select-dropdown">
          <option>
            Delivery
          </option>
          <option>
            Take away
          </option>
        </select>
    </div>

  );
}

export default Dropdown;
