import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/NavBar/navbar';
import PlayersList from './components/Players/PlayersList';

class App extends React.Component {
  constructor() {
		super();
		this.state = {
			players : [],
		};
	}

	componentDidMount() {
		axios.get('http://localhost:5000/api/players').then((response) => {
			console.log('Ze player response:', response);
			this.setState({
				players : response.data,
			});
		});
	}

	render() {
		return (
			<div className='App'>
				<Navbar />
				<PlayersList players={this.state.players} />
			</div>
    );
    }
}

export default App;