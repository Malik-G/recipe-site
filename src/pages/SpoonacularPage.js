import React, { Component } from 'react'
import { connect } from 'react-redux';
import Search from '../components/Search'
import RecipeList from '../components/RecipeList'
import LoadingScreen from '../components/LoadingScreen'

class SpoonacularPage extends Component {

	state = {
		search: '',
		loading: false
	}

	componentWillMount() {
		this.runTimeout = setTimeout(() => alert('Please use this API sparingly, it\'s expensive.'), 800)
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
		this.props.dispatch({ type: 'GET_SPOON', payload: this.state.search })
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
		let RecipeListInsert = this.state.loading ? <LoadingScreen /> : <RecipeList recipes={this.props.spoonReducer} />
		return (
			<>
				<Search
					title="Spoonacular"
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
	spoonReducer: reduxStore.spoonReducer
});

export default connect(mapToReduxStore)(SpoonacularPage)