import React from 'react';
import '../assets/css/style.css';



function ReOrderSec(props) {
  return (
    <div className="reorder-sec">
        <p className='date'>{props.date}</p>
        <p className='price'>{props.price}</p>
        <span className='price-btn'>{props.btn}</span>

    </div>
  );
}

export default ReOrderSec;
