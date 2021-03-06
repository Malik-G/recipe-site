import React, { Component } from 'react';
import Recipe from './Recipe';


class RecipeList extends Component {
	render() {
		return (
			<>
				<div className="container py-5">
					<div className="row">
						{this.props.recipes.map( (r, i) => <Recipe key={i} re={r} />)}
					</div>
				</div>
			</>
		)
	}
}

export default RecipeList