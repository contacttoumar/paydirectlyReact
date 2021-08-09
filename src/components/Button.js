import React from 'react';
import '../assets/css/style.css';



function Button(props) {
  return (
    <button className="default-btn">{props.label}</button>
  );
}

export default Button;
