import './ChartBar.css';

const ChartBar = (props) => {
	// const chartBarHeight = props.monthTotal/props.max
	const height = ((props.value/props.max) * 100).toString();

	const chartBarHeight = height + '%'
	return (
		<div>
			<div className="chart-bar-container">
				<div className="chart-bar">
					<div className="chart-bar-fill" style={{height: chartBarHeight}}></div>
				</div>
			</div>
			<div className="chart-bar-month">{props.month}</div>
		</div>
		
		
	)
}

export default ChartBar;