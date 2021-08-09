import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/css/orderdetail.css';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Label from '../components/Label';
import Tip from '../components/Tip';

import '../assets/css/bootstrap.min.css';
import '../assets/css/dateField.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Orders() {
  return (
    <div className="container custom-cont">
      <div className="row logo">
        <div className="col-12">
            <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="row firstRows">

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
                <Link to="/order-completed">
                  <Button label="Completed Order"/>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
