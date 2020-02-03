import React, {Component} from 'react'
import Search from '../components/Search'

class SpoonacularPage extends Component {
	
	
	handleChange = (event) => {
		this.setState({
			search: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}
	
	render(){
		return(
			<>
				<Search
					search={this.state.search}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
				{/* <RecipeList recipes={this.state.data} /> */}
			</>
		)
	}
}

export default SpoonacularPage