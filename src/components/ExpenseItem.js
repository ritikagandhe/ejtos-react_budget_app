import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { TiPlusOutline }   from 'react-icons/ti';
import {TiMinus }   from 'react-icons/ti';
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
		// alert()
		const expense = {
			name: name,
			cost: 10,
		};
		dispatch({
			type: 'RED_EXPENSE',
			payload: expense
		});
	}

	return (
		<tr>
		<td>{props.name}</td>
		<td>{currency}{props.cost}</td>
		<td align="center"><TiPlusOutline size='1.5em' color="green" onClick={event=> increaseAllocation(props.name)}></TiPlusOutline></td>
		<td align="center"><TiMinus size='1.5em' color="red"  onClick={event=> decreaseAllocation(props.name)}></TiMinus></td>
		<td align="center"><TiDelete size='1.5em' align='center'  onClick={handleDeleteExpense}></TiDelete></td>
		</tr>
	);
};

export default ExpenseItem;