import React, { Component } from 'react';
import RecipeRiotLogo from '../images/recipe-riot-logo.png'


class RecipeList extends Component {
	render() {
		return (
			<>
				<div className="loading-container">
					<img src={RecipeRiotLogo} className="load-image" alt='logo' />
					<h3>Cooking, please wait . . . .</h3>
				</div>
			</>
		)
	}
}

export default RecipeList