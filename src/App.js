import React from 'react';
import { Towers } from './components/Towers';
import './App.css'; 

class App extends React.Component {
	state = {
		towers: null,
		isLoading: false,
	}
	componentDidMount() {
		this.setState({ isLoading: true })
		fetch('http://localhost:3000/data/towersData.json')
		.then(response => {
			return response.json();
		})
		.then(data => {
			this.setState({ isLoading: false, towers: data });
		})
	}	
	render() {
		const { towers, isLoading } = this.state;

		return (
			<React.Fragment>
				{isLoading && <p>Загружаю...</p>}
				{Array.isArray(towers) && <Towers data={towers} />}
			</React.Fragment>
		)
	}
}

export default App;
