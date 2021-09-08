import React from 'react';
import '../assets/css/style.css';
import '../assets/css/reorder.css';
import ReOrderBtn from '../components/ReOrderBtn';
import ReOrderBtns from '../components/ReOrderBtns';
import Label from '../components/Label';
import Button from '../components/Button';
import '../assets/css/bootstrap.min.css';
function SecondReorder() {
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
        <div className="col-12">
            <div className="sidebar">
                <p className="orderHeading">Order detail</p>
              <hr className="default-line"/>
              <div className="orders">
              <Label label="Orders"/>
              <p className='left'>1X <span className="deal">Pizza</span></p>
              <p className='left'>1X <span className="deal">Hamburger</span></p>
              </div>
              <hr className="default-line"/>
              <p className='left text-center'>Coupon Code</p>
              <hr className="default-line"/>
              <div className="row total">
                  <div className="col-6">
                      <Label label="Subtotal"/>
                      <Label label="Delivery"/>
                      <Label label="Taxes"/>
                      <Label label="Total"/>
                  </div>
                  <div className="col-6">
                      <Label label="$26.00"/>
                      <Label label="$26.00"/>
                      <Label label="$26.00"/>
                      <Label label="$26.00"/>
                  </div>
              </div>
              <hr className="default-line"/>
              <Button label="Completed Order"/>
            </div>
        </div>
      </div>
    </div>
  );
}
export default SecondReorder;
