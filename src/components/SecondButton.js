import React from 'react';
import '../assets/css/style.css';

function SecondButton(props) {
  return (
    <button className="second-default-btn">{props.label}</button>
  );
}

export default SecondButton;
