import React, { useState, useEffect, useRef } from "react";
import { isEmpty } from "lodash";
import { FaAngleDown } from "react-icons/fa";
function SingleSelect(props) {
    const ref = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [inputLable, setInputLable] = useState((props.inputLable ? props.inputLable : ""));
    const [inputName, setInputName] = useState((props.inputName ? props.inputName : ""));
    const [inputValue, setInputValue] = useState((props.inputValue ? props.inputValue : ""));
    const [errorMessage, setErrorMessage] = useState((props.errorMessage ? props.errorMessage : ""));
    const [inputOptions, setInputOptions] = useState((props.inputOptions ? props.inputOptions : ""));
    const [displayMessage, setDisplayMessage] = useState((props.displayMessage ? props.displayMessage : ""));
    const [matchWith, setMatchWith] = useState((props.matchWith ? props.matchWith : ""));
    const [returnwith, setReturnwith] = useState((props.returnwith ? props.returnwith : ""));
    const [isOptional, setIsOptional] = useState((props.isOptional ? props.isOptional : ""));
    const [selectedText, setSelectedText] = useState("");
    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen]);
    useEffect(() => {
        if (!isOptional) {
            if (!isEmpty(getValueFromTheArray(inputValue))) {
                setErrorMessage("");
            }
            else {
                setErrorMessage(displayMessage);
            }
        }
        else {
            setErrorMessage("");
        }
        props.onValidate(errorMessage, inputValue);
    }, [inputValue]);
    const getValueFromTheArray = (key) => {
        if (!isEmpty(inputOptions) && !isEmpty(matchWith) && !isEmpty(returnwith)) {
            key = key.toString().toLowerCase();
            let co = inputOptions.find((i) => (!isEmpty(i[matchWith]) ? i[matchWith].toString().toLowerCase() : "") === key);
            return co ? (!isEmpty(co[returnwith]) ? co[returnwith] : "") : "";
        }
        else {
            return "";
        }
    }
    const setSelectBoxValue = (value) => {
        setInputValue(value);
    }
    const setSelectBoxTextValue = (value) => {
        setSelectedText(value);
    }
    return (
        <>
            <div className="custom-dropdown">
                <label className="label labels">{inputLable}</label>
                <div className={"dropdown-wrapper " + (isMenuOpen ? "active" : "")}>
                    <div className="icon-wrapper"  ref={ref}>
                        <button className="toggle-action dropdown-button" onClick={() => setIsMenuOpen(oldState => !oldState)}>
                            {selectedText}<FaAngleDown className="toggle fa fa-chevron-down" />
                        </button>
                        <div className="dropdown-content">
                            <ul>
                                {!isEmpty(inputOptions) ?
                                    Object.keys(inputOptions).map(function (keyName, keyIndex) {
                                        if(inputOptions[keyName][matchWith] == inputValue) {
                                            if(selectedText != inputOptions[keyName][returnwith])
                                                setSelectedText(inputOptions[keyName][returnwith]);
                                        }
                                        return (
                                            <li onClick={() => setSelectBoxValue(inputOptions[keyName][matchWith])}><input id={keyIndex} type="radio" name="test" defaultChecked={inputOptions[keyName][matchWith] == inputValue ? true : false}/><label for={keyIndex}>{inputOptions[keyName][returnwith]}</label></li>
                                        );
                                    })
                                    :
                                    null
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SingleSelect;