import './NewExpense.css';
import React, {useState} from 'react';

const NewExpense = (props) => {

	// Could also put states into one object
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: ''
	// })
	// const titleChangeHandler = (event) => {
	// 	setUserInput(() => {	
	// 		return {
	// 			...userInput,
	// 			enteredTitle: event.target.value
	// 		}
	// 	})
	// }

	const [enteredTitle, setEnteredTitle] = useState('');
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value)
	}

	const [enteredAmount, setEnteredAmount] = useState('');
	const amountChangedHandler = (event) => {
		setEnteredAmount(event.target.value)
	}

	const [enteredDate, setEnteredDate] = useState('');
	const dateChangedHandler = (event) => {
		setEnteredDate(event.target.value)
	}

	const submitHandler= (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			price: +enteredAmount,
			date: new Date(enteredDate),
			id: Math.random()
		}

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');

		props.addExpense(expenseData)
	}
	return (
		<div className="new-expense">
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input value={enteredTitle} type="text" onChange={titleChangeHandler}/>
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangedHandler}/>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input value={enteredDate} type="date" min="2021-01-01" max="2022-01-01" onChange={dateChangedHandler}/>
					</div>
					<div className="new-expense__actions">
						<button className="add-expense-btn" type="submit">Add Expense</button>
					</div>
				</div>
				
			</form>
		</div>
	)
}

export default NewExpense;