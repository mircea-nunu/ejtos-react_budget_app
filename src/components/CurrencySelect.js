import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
    <div class="custom-select">
    <label > Currency
      <select
        name="Currency" id="Currency" 
        onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="₹">₹ Ruppee</option>
        <option value="€">€ Euro</option>
    </select>	
    </label>
    </div>
    );

};

export default CurrencySelect;