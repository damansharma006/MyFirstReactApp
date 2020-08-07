import React from 'react';
import CardList from '../Components/CardList';

import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import './App.css';
class App extends React.Component {
	constructor()
	{
		super()
		this.state={
			robots: [],
			searchfield:''
		}

	}
	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{return response.json();})
		.then(users=>
			{
				this.setState({robots:users})
			}
	
	)



	}
	onSearchChange=(event)=>
	{
		this.setState({searchfield: event.target.value})
	}
	render()
	{
		const filteredRobots=this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.length===0)
		{
			return <h1>LOADING.......</h1>
		}
		else
		{return(
	<div className='tc'>
	<h1>RoboFriends</h1>
	<SearchBox SearchChange={this.onSearchChange}/>
	<Scroll>
	<CardList robots={filteredRobots}/>
	</Scroll>
	</div>
	);
}

	}

}  
export default App;  

