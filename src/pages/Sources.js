import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
						<Link to="/edamam">
							<img src={Edamam} className="src-img edamam-img " alt="edamam-logo" />
						</Link>
						<h4>Edamam</h4>
					</div>

					<div className="margin inline ">	
						<Link to="/campbells">
							<img src={Campbells} className="src-img campbells-img" alt="campbells-logo" />
						</Link>
						<h4>Campbell's</h4>
					</div>

					<div className="margin inline">
						<Link to="/spoon">
							<img src={Spoon} className="src-img spoon-img" alt="spoonacular-logo" />
						</Link>
						<h4>Spoonacular</h4>
					</div>
			</div>
			</>
		)
	}
}

export default AllRecipes