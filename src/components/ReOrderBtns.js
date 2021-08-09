import React from 'react';
import '../assets/css/style.css';



function ReOrderBtns(props) {
  return (
    <button className="reorder-btns">{props.label}</button>
  );
}

export default ReOrderBtns;
