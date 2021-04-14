import ExpenseItem from "./ExpenseItem"
import './Expneses.css';
import Card from '../../UI/Card';

const Expenses = () => {

	const expenses = [
		{
			title: 'Car Insurance',
			price: 294,
			date: new Date(2021, 2, 27)
		},
		{
			title: 'Rent',
			price: 800.00,
			date: new Date(2021, 2, 27)
		},
		{
			title: 'Phone Bill',
			price: 105.00,
			date: new Date(2021, 2, 27)
		},
		{
			title: 'Cable & Wifi',
			price: 120,
			date: new Date(2021, 2, 27)
		}
	]

	const expenseItems = expenses.map((expense) => {
		return <ExpenseItem title={expense.title} date={expense.date} price={expense.price}></ExpenseItem>
	})
	return (
		<Card className="expenses">
			{expenseItems}
		</Card>
	)
}

export default Expenses;