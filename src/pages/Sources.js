import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import Banner from '../components/Banner';
import {recipeData} from '../data/tempList';
import Spoon from '../images/spoonacular-logo.png';
import Edamam from '../images/edamam-logo1.jpg';
import Campbells from '../images/campbells-logo.png';

class AllRecipes extends Component {
	// constructor(props){
	// 	super(props);
	// }

	state = {
		data: recipeData,
		search: ''
	}

	
	
	render() {
		return (
			<>
			<Banner bannerText="Sources"/>
			<div className="text-align-center">
					<div className="margin inline">
						<img src={Spoon} className="src-img spoon-img" alt="spoonacular-logo"/>
						<h4>Spoonacular</h4>
					</div>
					
					<div className="margin inline">
						<img src={Edamam} className="src-img edamam-img " alt="edamam-logo" />
						<h4>Edamam</h4>
					</div>

					<div className="margin inline ">	
						<img src={Campbells} className="src-img campbells-img" alt="campbells-logo" />
						<h4>Campbell's</h4>
					</div>
			</div>
			</>
		)
	}
}

export default AllRecipes