import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from './Dropdown';

const CurrencySelect = () => {
    const {dispatch } = useContext(AppContext);

    const [showMenu, setshowMenu] = useState(false);

    useEffect(() => {
        const handler = () => setshowMenu(false)
        
    })
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
        <Dropdown placeHolder="Currency" options={options}/>
    );

};

export default CurrencySelect;