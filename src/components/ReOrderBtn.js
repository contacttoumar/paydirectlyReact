import React from 'react';
import '../assets/css/style.css';



function ReOrderBtn(props) {
  return (
    <button className="reorder-btn">{props.label}</button>
  );
}

export default ReOrderBtn;
