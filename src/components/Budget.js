import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {budget, dispatch, expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

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
        } else if (e.target.value < totalExpenses) {
            console.log(totalExpenses)
            alert("The value cannot lower than the spendings");
            dispatch({
                type: 'SET_BUDGET',
                payload: totalExpenses,
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
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                step='10'
                max='20000'
                id='budget'
                value={budget}
                style={{ marginLeft: '3px' , size: 10}}
                onChange={handleChange}>
            </input>
        </div>
    );
};
export default Budget;
