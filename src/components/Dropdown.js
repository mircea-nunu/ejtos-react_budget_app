import React from "react";

const Dropdown = ({ placeHolder, options, changeCurrency }) => {
    const getDisplay = () => {
      return placeHolder;
    };
  
    return (
        <label
            className="alert alert-success" 
            htmlFor="currency-select" id="currency-label"> {getDisplay()}
            <select
                className="alert alert-success"
                name="Currency" id="currency-select" 
                onChange={event=>changeCurrency(event.target)}>
                {options.map((option) => (
                <option 
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