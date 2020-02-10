import React, { Component } from 'react'
import { connect } from 'react-redux';
import Search from '../components/Search'

class SpoonacularPage extends Component {

	state = {
		search: ''
	}

	getRecipes = (event) => {
		event.preventDefault()
		let searchString = this.state.search
		const regexNumbers = /[0-9]/g
		const regexSpecialChar = /[~`!@#$%^&*()_\-+=,.<>?/"':;{}[\]|\\]/g

		if (this.state.search === '') {
			alert('Your search cannot be empty')
		}
		else if (searchString.match(regexNumbers) == null && searchString.match(regexSpecialChar) == null) {
			this.props.dispatch({ type: 'GET_SPOON', payload: searchString })
		}
		else if (searchString.match(regexNumbers) !== null) {
			alert('Your search cannot contain numbers or special characters')
		}
		else if (searchString.match(regexSpecialChar) !== null) {
			alert('Your search cannot contain numbers or special characters')
		}
		else return
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
					title="Spoonacular"
					subtext=""
					getRecipes={this.getRecipes}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
				{/* <RecipeList recipes={this.state.data} /> */}
			</>
		)
	}
}

const mapToReduxStore = reduxStore => ({
	edamamReducer: reduxStore.edamamReducer
});

export default connect(mapToReduxStore)(SpoonacularPage)