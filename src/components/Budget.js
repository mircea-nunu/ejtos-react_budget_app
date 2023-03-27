import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {budget, dispatch, expenses, currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const [focusInput, setfocusInput] = useState('initial');

    const handleFocus = (focusStatus) => {
        console.log(focusStatus);
        setfocusInput(focusStatus);
        if (focusInput ==="Unfocused") {
            console.log(totalExpenses)
            alert("The value cannot lower than the spendings");
            dispatch({
                type: 'SET_BUDGET',
                payload: totalExpenses,
            });
            setfocusInput("reset");
        }
    }
   

    const handleChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '') {
                dispatch({
                    type: 'SET_BUDGET',
                    payload: e.target.value,
                });
        }
        if (e.target.value >20000) {
            alert("The value cannot exceed 20000  £");
        dispatch({
            type: 'SET_BUDGET',
            payload: 20000,
        });
        } else if (re.test(e.target.value)) {
            dispatch({
                type: 'SET_BUDGET',
                payload: e.target.value,
            });
        } 
    }
    

    return (
        <div className='alert alert-secondary'>
            <p className="budget">Budget: {currency}
            <input
                required='required'
                type='number'
                step='10'
                max='20000'
                id='budget'
                value={budget}
                style={{ marginLeft: '3px' , size: 10}}
                onChange={handleChange}
                onFocus={(e) => handleFocus("focused")}
                onBlur={(e) => handleFocus("Unfocused")}>
            </input>
            </p>
        </div>
    );
};
export default Budget;
