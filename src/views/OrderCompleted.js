import React from 'react';
import logo from '../assets/images/logo.png';
import vector from '../assets/images/Vector.png';
import email from '../assets/images/email.png';
import playstore from '../assets/images/google-play.png';
import appstore from '../assets/images/app-store.png';
import party from '../assets/images/party.png';


import '../assets/css/style.css';
import '../assets/css/order-completed.css';

import Button from '../components/Button';
import CustomField from '../components/CustomField';
import Dropdown from '../components/Dropdown';
import Label from '../components/Label';
import Tip from '../components/Tip';
import OrderCompletedText from '../components/OrderCompletedText';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/dateField.css';


function Orders() {
  return (
    <div className="container custom-cont custom-conts">
      <div className="row logo">
        <div className="col-12">
            <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="row margin margin-bt">
        <div className="col-12">
            <p className='orderCompleted-text text-center'>
            <img  src={party} className="emoji" alt="Party emoji"/>
            Order Complete</p>
        </div>

        <div className="row ordercompleted-sec">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className='row address text-left'>
                <div className='col-2 text-center paddingnone'>
                    <img src={vector} className="img-fluid" alt="vector logo"/>
                </div>
                <div className='col-9 paddingnone'>
                    <OrderCompletedText text='Your food will be deliverd to'/>
                    <OrderCompletedText text='Address: 123 easton in Aerox -in 30min'/>
                </div>
            </div>

            <div className='row address text-left'>
                <div className='col-2 text-center'>
                    <img src={email} className="img-fluid email-logo" alt="vector logo"/>
                </div>
                <div className='col-9 paddingnone'>
                    <OrderCompletedText text='Your food will be deliverd to'/>
                    <OrderCompletedText text='Address: 123 easton in Aerox -in 30min'/>
                </div>
            </div>

            <div className="row margin">
                <div className="col-12 text-left return-store-btn">
                    <Button label="Return To Store"/>
                </div>
            </div>

        <div className="downside">
            <div className="row margin-lg">
                <div className='col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12 text-center'>
                    <p className="thankyou-text">Download directly app to edit to edit your information and see the best restaurant around you.</p>
                </div>
            </div>

                <div className="margin store-btns">
                    <div className=' text-center playstore-btn'>
                            <img src={playstore} className="img-fluid store" alt="Play-store"/>
                            <Button label="Play Store"/>
                    </div>

                    <div className='text-center appstore-btn'>
                            <img src={appstore} className="img-fluid store" alt="App-store"/>
                            <Button label="App Store"/>
                    </div>
                </div>
        </div>

        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 sidebar-section">
            <div className="orderSidebar-second">
              <hr className="default-line"/>
              <Label label="Orders"/>
              <p className='left'>1X <span className="deal">Pizza</span></p>
              <p className='left'>1X <span className="deal">Hamburger</span></p>
              <hr className="default-line"/>
              <div>
                  <input type="text" className="coupon" placeholder="+  Coupon Code"/>
              </div>
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
                <Button label="Completed Order"/>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
