import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
	render() {
		return (
			<>
			<div className="container py-5">
				<div className="row">
					{this.props.recipes.map( r => <Recipe key={r.recipe_id} re={r} /> )}
				</div>
			</div>
			
			</>
		)
	}
}

export default RecipeList