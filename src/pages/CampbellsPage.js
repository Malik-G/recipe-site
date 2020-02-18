import React, { Component } from 'react'
import { connect } from 'react-redux';
import Search from '../components/Search'
import RecipeList from '../components/RecipeList'
import LoadingScreen from '../components/LoadingScreen'

class CampbellsPage extends Component {

	state = {
		search: '',
		loading: false
	}

	//Come back to experiment with making setState a Promise
	// promise1 = new Promise((resolve, reject) => {

	// })

	getRecipes = (event) => {
		event.preventDefault()
		const regexNumbers = /[0-9]/g
		const regexSpecialChar = /[~`!@#$%^&*()_\-+=,.<>?/"':;{}[\]|\\]/g

		if (this.state.search === '') {
			alert('Your search cannot be empty')
		}
		else if (this.state.search.match(regexNumbers) == null && this.state.search.match(regexSpecialChar) == null) {
			this.setState({ loading: true }, () => { this.triggerDispatch() })
		}
		else if (this.state.search.match(regexNumbers) !== null) {
			alert('Your search cannot contain numbers or special characters')
		}
		else if (this.state.search.match(regexSpecialChar) !== null) {
			alert('Your search cannot contain numbers or special characters')
		}
		else console.log('else')
	}

	triggerDispatch = () => {
		this.props.dispatch({ type: 'GET_CAMPBELLS', payload: this.state.search })
		setTimeout(() => {
			this.setState({ loading: false })
		}, 3000);
	}

	handleChange = (event) => {
		this.setState({ search: event.target.value })
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		let RecipeListInsert = this.state.loading ? <LoadingScreen /> : <RecipeList recipes={this.props.campbellsReducer} />
		return (
			<>
				<Search
					title="Campbell's"
					subtext=""
					getRecipes={this.getRecipes}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
				{RecipeListInsert}
			</>
		)
	}
}

const mapToReduxStore = reduxStore => ({
	campbellsReducer: reduxStore.campbellsReducer
});

export default connect(mapToReduxStore)(CampbellsPage)