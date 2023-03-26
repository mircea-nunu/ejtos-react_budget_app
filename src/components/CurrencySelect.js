import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        console.log(val.selectedIndex + " " 
        + val[val.selectedIndex].text +
        " " + val.value,)
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val.value,
            })
    }
    

  return (
    <label
        className="alert alert-success" 
        htmlFor="currency-select" id="currency-label"> Currency (
        <select
            className="alert alert-success"
            name="Currency" id="currency-select" 
            onChange={event=>changeCurrency(event.target)}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="₹">₹ Ruppee</option>
            <option value="€">€ Euro</option>
        </select>
    )	
    </label>
    );

};

export default CurrencySelect;