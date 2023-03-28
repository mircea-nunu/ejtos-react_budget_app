import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {budget, dispatch, expenses, currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleFocus = (e, focusStatus) => {
        if (e.target !== undefined) {
            console.log(e.target.value);

            if ((focusStatus ==="Unfocused") & (e.target.value < totalExpenses)) {
                // console.log(totalExpenses)
                alert("The value cannot be lower than the spendings");
                dispatch({
                    type: 'SET_BUDGET',
                    payload: totalExpenses,
                });
            }
        }
        focusStatus = "reset"
    }
   

    const handleChange = (ev) => {

        const re = /^[0-9\b]+$/;
        if (ev.target.value === '') {
            dispatch({
                type: 'SET_BUDGET',
                payload: '',
            });
        }
        if (ev.target.value >20000) {
            alert("The value cannot exceed 20000  £");
        dispatch({
            type: 'SET_BUDGET',
            payload: 20000,
        });
        } else if (re.test(ev.target.value)) {
            dispatch({
                type: 'SET_BUDGET',
                payload: ev.target.value,
            });
        }
        handleFocus("reset")
    }
    

    return (
        <div className='alert alert-secondary'>
            <label for="budget-input" className="budget-label">Budget: {currency}</label>
            <span className="budget-span"><input
                id='budget-input'
                className="budget-input"
                autoFocus
                required='required'
                type='number'
                step='10'
                max='20000'
                value={budget}
                style={{ marginLeft: '3px' , size: 10}}
                onChange={handleChange}
                onFocus={(e) => handleFocus(e, "focused")}
                onBlur={(e) => handleFocus(e,"Unfocused")}>
            </input></span>
        </div>
    );
};
export default Budget;
