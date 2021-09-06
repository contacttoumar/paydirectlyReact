import React from 'react';
import '../assets/css/dropdown.css';


function Dropdown(props) {


  return (
    <div className="custom-dropdown">
      <label className="label labels">{props.label}</label>
          <div className="dropdown-wrapper">
            <div className="icon-wrapper">
                <button onClick={handleChange} className="toggle-action dropdown-button">
                <i className="toggle fa fa-chevron-down"></i>
                </button>
              <div className="dropdown-content">
                <ul>
                  <li><input type="radio" name="test" id="1" /><label for="1">All sources</label></li>
                  <li><input type="radio" name="test" id="2" /><label for="2">Dropbox</label></li>
                  <li><input type="radio" name="test" id="3" /><label for="3">Google Drive</label></li>
                </ul>
              </div>
            </div>
          </div>
    </div>

  );
}

function handleChange() {
  let toggle = function(){
    document.querySelectorAll('.dropdown-wrapper')[0].classList.toggle('active');
  }
  document.querySelectorAll('.toggle-action')[0].addEventListener("click", toggle);
}
export default Dropdown;
