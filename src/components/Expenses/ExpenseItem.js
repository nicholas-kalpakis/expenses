import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

	const month = props.date.toLocaleString('en-US', { month: 'long'});
	const day = props.date.toLocaleString('en-US', { day: '2-digit'});
	const year = props.date.getFullYear();
	return (
		<Card className="expense-item">
			<div className="expense-date">
				<div className="expense-date__month">{month}</div>
				<div className="expense-date__day">{day}</div>
				<div className="expense-date__year">{year}</div>
			</div>
			
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.price}</div>
				<img alt="delete" onClick={() => props.deleteExpense(props.id)} className="trash-icon" src="https://img.icons8.com/ios/50/000000/trash--v1.png"/>
			</div>
		</Card>
	)
}

export default ExpenseItem