import React from 'react';
import { useHistory, Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import '../assets/css/orderdetail.css';
import Button from '../components/Button';
import Label from '../components/Label';
import '../assets/css/bootstrap.min.css';
import '../assets/css/dateField.css';
function Orders() {
  let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
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

              <div className="previous-icon">
                <div>
                  <i class="far fa-arrow-alt-circle-left text-left back-icon" onClick={goToPreviousPath}></i>
                </div>
              <p className="orderHeading">Order Detail</p>
              </div>

              <hr className="default-line"/>
              <div className="orders">
              <Label label="Orders"/>
              <p className='left'>1X <span className="deal">Pizza</span></p>
              <p className='left'>1X <span className="deal">Hamburger</span></p>
              </div>
              <hr className="default-line"/>
                <div>
                  <input type="text" className="coupon" placeholder="+  Coupon Code"/>
                </div>
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
