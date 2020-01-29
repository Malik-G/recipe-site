import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
	render() {
		return (
			<>
			<div className="container py-5">
				<div className="row">
					<div className="text-center col-10 col-md-6 col-lg-4 mx-auto mb-3">
						<h1>Recipe List</h1>
					</div>
				</div>
				<div className="row">
					{this.props.recipes.map( r => <Recipe key={r.recipe_id} re={r} /> )}
				</div>
				
			</div>
			
			</>
		)
	}
}

export default RecipeList