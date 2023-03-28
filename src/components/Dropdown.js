import React from "react";

import "./Components.css";

const Dropdown = ({ options, changeCurrency, currency }) => {
  
    return (
        <div className="drop-div">
            Currency (
            <select
                className="currency-select" 
                onChange={event=>changeCurrency(event.target)}
                defaultValue={currency}
                >
                {options.map((option) => (
                <option className ="currency-option"
                    key={option.value}
                    value={option.value}>{option.label}
                </option>
                ))}
            </select>)
        </div>
    );
  };
  
  export default Dropdown;