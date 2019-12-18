import React from 'react'
import PropTypes from 'prop-types'
import tower from '../tower.svg';

class Tower extends React.Component {
	render() {
		const { title, value, maxValue, minValue} = this.props.data;
		return (
			<div className={(value > maxValue) || (value < minValue) ? "item danger" : "item"}>
				<p className="desc">
					{title}
				</p>
				<p className="value">
					{value > maxValue ? 100 : Math.round((value * 100) / maxValue)}%
				</p>
				<div className="tower-img">
					<img src={tower} alt="tower" />
					<div className="level"
						style={
							{height: value > maxValue ? 389 : Math.round(389 * ((value * 100) / maxValue)) / 100}
						}
					></div>
				</div>
				<p className="desc">
					Масса карналина
				</p>
				<p className="value">
					{value > maxValue ? maxValue : value}
				</p>
			</div>
		)
	}
}
Tower.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		value: PropTypes.number.isRequired,
		maxValue: PropTypes.number.isRequired,
		minValue: PropTypes.number.isRequired,
	})
}

export { Tower }