import React from 'react';
import logo from '../assets/images/logo.png';
import dish1 from '../assets/images/dish1.png';
import dish2 from '../assets/images/dish2.png';
import $ from "jquery"
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
            <div className="order-detail-btn">
              <Link to="/order-detail">
                <Button label="Order Details"/>
              </Link>
            </div>
            <div className="all-fields">
            <div className="first-field">
              <CustomField label="Email" name="email"/>
            </div>
            <div className="second-field">
            <CustomField label="Phone Number" name="phone_number"/>
            </div>
            <div className="third-field">
            <CustomField label="Address" name="address" placeholder="Home address"/>
            </div>
            <div className="forth-field">
            <Dropdown label="Order Type" name="select"/>
            </div>
            <div className="fifth-field">
            <CustomField label="Name" name="name"/>
            </div>
            <div className="sixth-field">
            <p className="add-field" onClick={addField}><button className="add-btn">+</button>APPARTMENT, BUILDING FLOOR</p>
            <div id="additems">
            </div>
            </div>
            </div>


            <div className="tipSection">
                <Label label="Tips"/>
                <Tip label="10%"/>
                <Tip label="15%"/>
                <Tip label="20%"/>
                <Tip label="Custom"/>
            </div>

            <CustomField label="Card Number" name="card_number"/>

            <div className="date-section">
              <div className="expiry">
              <Label label="Expiry"/>
              </div>
                  <div className="date-field-sec">
                    <label className="labels">(Mm /Yy)</label>
                    <input type="tel" id="date" className="date-field card-fields" placeholder="/"/>
                  </div>
                  <div className="cvc-sec">
                    <label className="labels">CVC</label>
                    <input type="text" className="cvc-field card-fields"/>
                  </div>
            </div>
            <div className="zipSec">
              <label className="labels">Zip Code</label>
              <input type="text" className="zipCode card-fields"/>
            </div>

        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 customSideSec">
            <div className="orderSidebar">
              <hr className="default-line"/>
              <div className="spacing-small">
                <Label label="Orders"/>
              </div>
              <div className="row spacing">
                  <div className="col-2 p-0">
                      <img src={dish1} alt="First dish" className="img-fluid"/>
                  </div>
                  <div className="col-8">
                  <p className='left deal-text'>1X <span className="deal">Pizza</span></p>
                  <p className="text-right">Extra Cheese</p>
                  </div>
              </div>
              <hr className="default-line"/>

              <div className="row spacing">
                  <div className="col-2 p-0">
                      <img src={dish2} alt="Second dish" className="img-fluid"/>
                  </div>
                  <div className="col-8">
                    <p className='left'>1X <span className="deal">Hamburger</span></p>
                  </div>
              </div>
              <hr className="default-line"/>
              <input type='text' className="coupon" placeholder="Coupon Code _ _ _ _"/>
              <hr className="default-line"/>

              <div className="row spacing-small">
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

function addField(){
  $("#additems").append(
    '<div class="field-div custom-add-field"><input type="text" name="floor" class="default-input" placeholder="Floor Suite"/></div>'
  );
}

export default Orders;
