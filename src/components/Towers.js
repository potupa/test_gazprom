import React from 'react'
import PropTypes from 'prop-types'
import { Tower } from './Tower'

class Towers extends React.Component {
	renderTowers = () => {
		const { data } = this.props;
		let towersTemplate = null;
		if (data.length) {
			towersTemplate = data.map(function(item) {
				return <Tower key={item.id} data={item}/>
			});
		}
		return towersTemplate;
	}
	render() {
		return (
			<React.Fragment>
				<div className="items">
					{this.renderTowers()}
				</div>
			</React.Fragment>
		);
	}
}

Towers.propTypes = {
	data: PropTypes.array.isRequired
}

export { Towers }