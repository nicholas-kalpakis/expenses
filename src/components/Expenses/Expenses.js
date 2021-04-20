import ExpenseItem from "./ExpenseItem"
import './Expneses.css';
import Card from '../UI/Card';
import NewExpense from './NewExpense/NewExpense';
import { useState } from 'react';
import Slider from '../UI/Slider';
import EmptyExpense from './EmptyExpense';
import Chart from '../UI/Chart/Chart';
import { ExpensesData, mapNumToMonth } from './ExpensesData';
const Expenses = () => {

	const [expenses, setExpenses] = useState(ExpensesData)

	const [month, setMonth] = useState('March')
	const [sliderValue, setSliderValue] = useState("3")
	const sliderEvent = (event) => {
		let value = event.target.value;
		switch(value) {
			case "1": {
				setMonth("January") 
				setSliderValue("1")
				return
			}
			case "2": {
				setMonth("February")
				setSliderValue("2")
				return
			}
			case "3": {
				setMonth("March")
				setSliderValue("3")
				return
			} 
			case "4": {
				setMonth("April")
				setSliderValue("4")
				return
			}
			case "5": {
				setMonth("May")
				setSliderValue("5")
				return
			}
			case "6": {
				setMonth("June")
				setSliderValue("6")
				return
			}
			case "7": {
				setMonth("July")
				setSliderValue("7")
				return
			}
			case "8": {
				setMonth("August")
				setSliderValue("8")
				return
			}
			case "9": {
				setMonth("September")
				setSliderValue("9")
				return
			}
			case "10": {
				setMonth("October")
				setSliderValue("10")
				return
			}
			case "11": {
				setMonth("November")
				setSliderValue("11")
				return
			}
			case "12": {
				setMonth("December")
				setSliderValue("12")
				return
			}
			default: {
			}
		}
	}


	const chartData = {};

	for (const expense of expenses) {
		const monthNum = expense.date.getMonth() + 1;
		const expensePrice = expense.price;
		const month = mapNumToMonth(monthNum);
		if (chartData[month] === undefined){
			chartData[month] = expensePrice
			
		}
		else {
			chartData[month] = chartData[month] + expensePrice
		}

		if (chartData['max'] === undefined) {
			chartData['max'] = expensePrice
		}
		else if (chartData['max'] < chartData[month]) {
				chartData['max'] = chartData[month]
		}
	}

	const addExpense = (expense) => {
		setExpenses((previousState) => {
			return [
				...previousState,
				expense
			]
		})
	}

	const deleteExpense = (id) => {
		const expenseIndexToDelete = expenses.findIndex(expense => {
			return expense.id === id
		})
		const updatedExpenses = expenses.slice();
		updatedExpenses.splice(expenseIndexToDelete,1);
		
		setExpenses(updatedExpenses);
	}
	

	const monthExpenseItems = expenses.filter(expense => {
		return expense.date.toLocaleString('en-US', { month: 'long'}) === month
	});

	const expenseItems = monthExpenseItems.map((expense) => {
		return <ExpenseItem deleteExpense={deleteExpense} id={expense.id} title={expense.title} date={expense.date} price={expense.price}></ExpenseItem>
	})

	return (
		<div>
			<NewExpense addExpense={(expense) => {addExpense(expense)}}/>
			<Chart chartData={chartData}></Chart>
			<Slider sliderValue={sliderValue} month={month} sliderEvent={sliderEvent}></Slider>
			{expenseItems.length > 0 ? 
				<Card className="expenses" month={month}>
					{expenseItems}
				</Card> : <Card className="expenses"><EmptyExpense/></Card> }
		</div>
	)
}

export default Expenses;