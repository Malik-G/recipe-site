import React, { Component } from 'react'
import { connect } from 'react-redux';
import Search from '../components/Search'
import RecipeList from '../components/RecipeList'

class CampbellsPage extends Component {

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
			this.props.dispatch({ type: 'GET_CAMPBELLS', payload: this.state.search })
		}
		else if (searchString.match(regexNumbers) !== null){
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
						title="Campbell's"
						subtext=""
						getRecipes={this.getRecipes}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>

					<RecipeList recipes={this.props.campbellsReducer} />
				
			</>
		)
	}
}

const mapToReduxStore = reduxStore => ({
	campbellsReducer: reduxStore.campbellsReducer
});

export default connect(mapToReduxStore)(CampbellsPage)