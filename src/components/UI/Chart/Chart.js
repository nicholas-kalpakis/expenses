import ChartBar from "./ChartBar";
import './Chart.css';
import { MONTHS } from '../../Expenses/ExpensesData';

const Chart = (props) => {
	const chartBars = [];

	for (const month in MONTHS) {
		if (props.chartData[month] !== undefined) {
			chartBars.push(<ChartBar month={MONTHS[month].abv} max={props.chartData['max']} value={props.chartData[month]/1.5}></ChartBar>)
		}
		else {
			chartBars.push(<ChartBar month={MONTHS[month].abv} max={props.chartData['max']} value={0}></ChartBar>)
		}
	}
	return (
		<div className="chart">
			{chartBars}
		</div>
		
	)
}

export default Chart;