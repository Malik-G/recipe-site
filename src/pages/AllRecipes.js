import React, { Component } from 'react';
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
import {recipeData} from '../data/tempList'

class AllRecipes extends Component {
	// constructor(props){
	// 	super(props);
	// }

	state = {
		data: recipeData,
		search: ''
	}

	handleChange = (event) => {
		this.setState({
			search: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}
	
	render() {
		return (
			<>
			<Search
				search={this.state.search}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
			<RecipeList recipes={this.state.data}/>
			</>
		)
	}
}

export default AllRecipes