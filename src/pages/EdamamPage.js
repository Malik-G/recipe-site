import React, { Component } from 'react'
import { connect } from 'react-redux';
import Search from '../components/Search'
import RecipeList from '../components/RecipeList'
import LoadingScreen from '../components/LoadingScreen'

class EdamamPage extends Component {
	
	state = {
		search: '',
		loading: false
	}

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
		else return
	}
	
	triggerDispatch = () => {
		this.props.dispatch({ type: 'GET_EDAMAM', payload: this.state.search })
		setTimeout(() => {
			this.setState({ loading: false })
		}, 4000);
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
		let RecipeListInsert = this.state.loading ? <LoadingScreen /> : <RecipeList recipes={this.props.edamamReducer} />
		return (
			<>
				<Search
					title="Edamam"
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
	edamamReducer: reduxStore.edamamReducer
});

export default connect(mapToReduxStore)(EdamamPage)