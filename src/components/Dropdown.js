import React from 'react';
import '../assets/css/dropdown.css';
import { FaAngleDown } from "react-icons/fa";


function Dropdown(props) {
  return (
    <div className="custom-dropdown">
      <label className="label labels">{props.label}</label>
      <div className="dropdown-wrapper active">
        <div className="icon-wrapper">
          <button className="toggle-action dropdown-button">
            <FaAngleDown className="toggle fa fa-chevron-down" />
          </button>
          <div className="dropdown-content">
            <ul>
              <li><input type="radio" name="test" id="1" /><label for="1">All sources</label></li>
              <li><input type="radio" name="test" id="2" /><label for="2">Dropbox</label></li>
              <li><input type="radio" name="test" id="3" /><label for="3">Google Drive</label></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dropdown;
