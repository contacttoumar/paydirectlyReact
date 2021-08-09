import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/css/style.css';
import Button from '../components/Button';
import CustomField from '../components/CustomField';
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

      <div className="row firstRow">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 custom-col">
            <Link to="/order-detail">
              <Button label="Order Details"/>
            </Link>
            <CustomField label="Email" name="email"/>
            <CustomField label="Name" name="name" placeholder="Name"/>
            <CustomField label="Address" name="address" placeholder="Home address"/>
            <Dropdown label="Order Type" name="select"/>

            <div className="tipSection">
                <Label label="Tips"/>
                <Tip label="10%"/>
                <Tip label="15%"/>
                <Tip label="20%"/>
                <Tip label="Custom"/>
            </div>

            <CustomField label="Card Number" name="card_number"/>

            <div className="date-section">
              <Label label="Expiry"/>
                  <div className="date-field-sec">
                    <label className="labels">(Mm/Yy)</label>
                    <input type="text" className="date-field" placeholder="/"/>
                  </div>
                  <div className="cvc-sec">
                    <label className="labels">CVC</label>
                    <input type="text" className="cvc-field"/>
                  </div>
            </div>
            <div className="zipSec">
              <label className="labels">Zip Code</label>
              <input type="text" className="zipCode"/>
            </div>

        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 customSideSec">
            <div className="orderSidebar">
              <hr className="default-line"/>
              <Label label="Orders"/>
              <p className='left'>1X <span className="deal">Pizza</span></p>
              <p className='left'>1X <span className="deal">Hamburger</span></p>
              <hr className="default-line"/>
              <p className='left'>Coupon Code   <span className="deal">_ _ _ _</span></p>
              <hr className="default-line"/>

              <div className="row">
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
              <p className="custom-text left">By clicking the button below you agree to our terms, privacy and policy and cookie policy</p>
              <Button label="Completed Order"/>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Orders;
