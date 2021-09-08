import React from 'react';
import '../assets/css/style.css';
import '../assets/css/reorder.css';
import ReOrderBtn from '../components/ReOrderBtn';
import ReOrderBtns from '../components/ReOrderBtns';
import '../assets/css/bootstrap.min.css';
import ReOrderSec from '../components/ReOrderSec';
function ReOrder() {
  return (
    <div className="container custom-order-cont">
      <div className="row logo">
        <div className="col-12">
            <p className="reorder-text">Re Order Page</p>
        </div>
      </div>

      <div className="row margin-lg margin-bt">
         <div className="col-6 text-left btn-padding-left">
            <ReOrderBtn label="Reward"/>
         </div>
         <div className="col-6 text-right btn-padding-right">
            <ReOrderBtns label="Edit Your Info"/>
         </div>

        <div className='col-12 margin'>
            <ReOrderSec date='07/23/2021' price='$53.44' btn='Pick Up'/>
            <ReOrderSec date='07/23/2021' price='$53.44' btn='Pick Up'/>
            <ReOrderSec date='07/23/2021' price='$53.44' btn='Pick Up'/>
            <ReOrderSec date='07/23/2021' price='$53.44' btn='Pick Up'/>
            <ReOrderSec date='07/23/2021' price='$53.44' btn='Pick Up'/>

        </div>
      </div>
    </div>
  );
}

export default ReOrder;
