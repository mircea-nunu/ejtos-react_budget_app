import React from "react";

import "./Dropdown.css";

const Dropdown = ({ placeHolder, options, changeCurrency, currency }) => {
    const getDisplay = () => {
      return placeHolder;
    };
  
    return (
        <label
            htmlFor="currency-select" className="currency-label"> {getDisplay()}
            <select
                className="currency-select" 
                onChange={event=>changeCurrency(event.target)}
                defaultValue={currency}
                >
                {options.map((option) => (
                <option className ="option-select"
                    key={option.value}
                    value={option.value}>{option.label}
                </option>
                ))}
            </select>
        )	
        </label>
    );
  };
  
  export default Dropdown;