import React from 'react';
import '../assets/css/style.css';



function CustomField(props) {
  return (
    <div className="field-div">
        <lablel className="label">{props.label}</lablel>
        <input type="text" name={props.inputName} className="default-input" placeholder={props.placeholder}/>
    </div>

  );
}

export default CustomField;
