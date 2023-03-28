import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from './Dropdown';
import "./Components.css";

const CurrencySelect = () => {
    const {dispatch, currency } = useContext(AppContext);

    const options = [
        {value: "$" , label: "$ Dollar"},
        {value: "£" , label: "£ Pound"},
        {value: "₹" , label: "₹ Ruppee"},
        {value: "€" , label: "€ Euro"},
    ]

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
      <div className="alert alert-success drop-container">
        <Dropdown placeHolder="Currency (" options={options} 
        changeCurrency={changeCurrency}
        currency={currency}/>
    </div>
    );

};

export default CurrencySelect;