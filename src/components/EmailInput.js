import React, { Component } from "react";
import { isEmpty } from "lodash";
import * as EmailValidator from 'email-validator';
class EmailInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputLable: (this.props.inputLable ? this.props.inputLable : ""),
            inputName: (this.props.inputName ? this.props.inputName : ""),
            inputValue: (this.props.inputValue ? this.props.inputValue : ""),
            errorMessage: (this.props.errorMessage ? this.props.errorMessage : ""),
            startLength: (this.props.startLength ? parseInt(this.props.startLength) : 0),
            endLength: (this.props.endLength ? parseInt(this.props.endLength) : 0),
            displayMessage: (this.props.displayMessage ? this.props.displayMessage : ""),
            isDisabled: (this.props.isDisabled ? this.props.isDisabled : false),
        };
    }
    checkSubmitButton = () => {
        var { inputValue, errorMessage, startLength, endLength, displayMessage } = this.state;
        let check = false;
        if (!isEmpty(inputValue) || (inputValue.length >= startLength && inputValue.length <= endLength)) {
            if (EmailValidator.validate(inputValue)) {
                check = true;
                errorMessage = "";
                this.setState({ errorMessage });
            }
        }
        if (!check) {
            errorMessage = displayMessage;
            this.setState({ errorMessage });
        }
        this.props.onValidate(errorMessage, inputValue);
    };
    render() {
        return (
            <>
                <label className={"label labels " + (!isEmpty(this.props.errorMessage) ? "marginBottomZeroImportant" : "")}>{this.props.inputLable}</label>
                <input name={this.props.inputName} type="email" minLength={this.props.startLength} maxLength={this.props.endLength} value={this.props.inputValue} onChange={(val) => { this.setState({ inputValue: val.target.value }, () => { this.checkSubmitButton(); }); }} autoComplete="off" className={"default-input " + (!isEmpty(this.props.errorMessage) ? "error" : "")} disabled={this.props.isDisabled} />
                {!isEmpty(this.props.errorMessage) ? (<><label className="label labels"><span className="redcolor errorFontSize">{this.props.errorMessage}</span></label></>) : null}
            </>
        );
    }
}
export default EmailInput;
