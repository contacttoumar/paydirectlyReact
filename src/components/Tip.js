import React from 'react';
import '../assets/css/style.css';



function Tip(props) {
  return (
    <span className="default-tip">{props.label}</span>
  );
}

export default Tip;
