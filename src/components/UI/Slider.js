import './Slider.css';
const Slider = (props) => {

	return (
		<div className="month-slider-container">
			<div className="month">{props.month} 2021</div>
			<div className="slider-container">
				<input className="month-slider" type="range" min="1" max="12" value={props.sliderValue} onChange={props.sliderEvent} />
			</div>
			
		</div>
		
	)
}

export default Slider;