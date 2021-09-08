import React, { Component } from "react";
import { isEmpty } from "lodash";
class TextInput extends Component {
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
            validationType: (this.props.validationType ? this.props.validationType : ""),
        };
    }
    checkSubmitButton = () => {
        var { inputValue, errorMessage, startLength, endLength, displayMessage, validationType } = this.state;
        errorMessage = displayMessage;
        if (validationType !== "emptyorlength") {
            if (!isEmpty(inputValue) || (inputValue.length >= startLength && inputValue.length <= endLength)) {
                errorMessage = "";
            }
        }
        else {
            if (isEmpty(inputValue) || (!isEmpty(inputValue) && (inputValue.length >= startLength && inputValue.length <= endLength))) {
                errorMessage = "";
            }
        }
        this.setState({ errorMessage });
        this.props.onValidate(errorMessage, inputValue);
    };
    render() {
        return (
            <>
                <div className="field-div">
                    <label className={"label labels " + (!isEmpty(this.props.errorMessage) ? "marginBottomZeroImportant" : "")}>{this.props.inputLable}</label>
                    <input name={this.props.inputName} type="text" minLength={this.props.startLength} maxLength={this.props.endLength} value={this.props.inputValue} onChange={(val) => { this.setState({ inputValue: val.target.value }, () => { this.checkSubmitButton(); });}} autoComplete="off" className={"default-input "+(!isEmpty(this.props.errorMessage) ? "error" : "")} />
                    {!isEmpty(this.props.errorMessage) ? (<><label className="clabel labels"><span className="redcolor errorFontSize">{this.props.errorMessage}</span></label></>) : null }
                </div>
            </>
        );
    }
}
export default TextInput;
