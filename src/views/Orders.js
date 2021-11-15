import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Button';
import SecondButton from '../components/SecondButton';
import CustomField from '../components/CustomField';
import Dropdown from '../components/Dropdown';
import EmailInput from "../components/EmailInput";
import ImagesConstant from "../shared/ImageConstant";
import Label from '../components/Label';
import Options from "../shared/remote/OptionConstants";
import SingleSelect from "../components/SingleSelect";
import TextInput from "../components/TextInput";
import Tip from '../components/Tip';
import '../assets/css/dateField.css';
function Orders() {
  const [orderType, setOrderType] = useState("2");
  return (
    <div className="container custom-cont">
      <div className="row logo">
        <div className="col-12">
          <img src={ImagesConstant.LogoPng} alt="Logo" />
        </div>
      </div>
      <div className="row firstRow">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 custom-col">
          <div className="order-detail-btn">
            <Link to="/order-detail">
              <Button label="Order Details" />
            </Link>
          </div>
          <div className="all-fields">
            <div className="first-field">
              <EmailInput onValidate={(errorMessage, inputValue) => { }} inputLable={"Email"} inputName={"email"} inputValue={""} displayMessage={"Enter the email"} errorMessage={""} startLength={1} endLength={100} isDisabled={""} />
            </div>
            <div className="second-field">
              <CustomField label="Phone Number" name="phone_number" />
            </div>
            <div className="third-field">
              <TextInput onValidate={(errorMessage, inputValue) => { }} inputLable={"Address"} inputName={"address"} inputValue={""} displayMessage={"Home address"} errorMessage={""} startLength={1} endLength={200} />
            </div>
            <div className="forth-field">
              {/* <Dropdown label="Order Type" name="select" /> */}
              <SingleSelect onValidate={(errorMessage, inputValue) => { setOrderType(inputValue);  }} inputLable={"Order Type"} inputName={"orderType"} inputValue={orderType} displayMessage={"Select the order type"} errorMessage={""} inputOptions={Options.booleanOptions} matchWith={"key"} returnwith={"val"} isOptional={false} />
            </div>
            <div className="fifth-field">
              <CustomField label="Name" name="name" />
            </div>
            <div className="sixth-field">
              <p className="add-field"><button className="add-btn">+</button>APPARTMENT, BUILDING FLOOR</p>
              <div id="additems">
              </div>
            </div>
          </div>
          <div className="tipSection">
            <Label label="Tips" />
            <Tip label="10%" />
            <Tip label="15%" />
            <Tip label="20%" />
            <input type='text' className="custom-tip" placeholder="Custom"/>
          </div>
          <div className='seventh-field'>
            <TextInput onValidate={(errorMessage, inputValue) => { }} inputLable={"Card Number"} inputName={"card_number"} inputValue={""} displayMessage={"Home address"} errorMessage={""} startLength={1} endLength={200} />
          </div>
          <div className="date-section">
            <div className="expiry">
              <Label label="Expiry" />
            </div>
            <div className="date-field-sec">
              <label className="labels">(Mm /Yy)</label>
              <input type="tel" id="date" className="date-field card-fields" placeholder="/" />
            </div>
            <div className="cvc-sec">
              <label className="labels">CVC</label>
              <input type="text" className="cvc-field card-fields" />
            </div>
          </div>
          <div className="zipSec">
            <label className="labels">Zip Code</label>
            <input type="text" className="zipCode card-fields" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 customSideSec">
          <div className="orderSidebar">
            <hr className="default-line" />
            <div className="spacing-small">
              <Label label="Orders" />
            </div>
            <div className="row spacing">
              <div className="col-2 p-0">
                <img src={ImagesConstant.DishOne} alt="First dish" className="img-fluid" />
              </div>
              <div className="col-8">
                <p className='left deal-text'>1X <span className="deal">Pizza</span></p>
                <p className="text-right">Extra Cheese</p>
              </div>
            </div>
            <hr className="default-line" />

            <div className="row spacing">
              <div className="col-2 p-0">
                <img src={ImagesConstant.DishTwo} alt="Second dish" className="img-fluid" />
              </div>
              <div className="col-8">
                <p className='left'>1X <span className="deal">Hamburger</span></p>
              </div>
            </div>
            <hr className="default-line" />
            <input type='text' className="coupon" placeholder="Coupon Code _ _ _ _" />
            <button className="verify-btn">Verify</button>
            <hr className="default-line" />
            <div className="row spacing-small">
              <div className="col-6">
                <Label label="Subtotal" />
                <Label label="Delivery" />
                <Label label="Taxes" />
                <Label label="Total" />
              </div>
              <div className="col-6">
                <Label label="$26.00" />
                <Label label="$26.00" />
                <Label label="$26.00" />
                <Label label="$26.00" />
              </div>
            </div>
            <hr className="default-line" />
            <p className="custom-text left">By clicking the button below you agree to our terms, privacy and policy and cookie policy</p>
            <div className="text-center">
              <SecondButton label="Completed Order" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Orders;
