import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import {AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button 
            className="plus-minus-button"
            onClick={event=> increaseAllocation(props.name)}>
            <AiFillPlusCircle size='2em' color="green"></AiFillPlusCircle>
        </button></td>
        <td><button 
            className="plus-minus-button"
            onClick={event=> decreaseAllocation(props.name)}>
            <AiFillMinusCircle size='2em' color="red"></AiFillMinusCircle>
        </button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
