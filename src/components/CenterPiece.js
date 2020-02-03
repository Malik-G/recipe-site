import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CenterPiece extends Component{
	state = {
		title: this.props.customTitle,
	}
	
	render() {
		return (
			<>
			<h1 className="letter-spacing text-slanted text-color">
				{this.state.title}
			</h1>
			<Link to="/sources" className="btn btn-lg btn-secondary mt-3 text-uppercase">
				Search Recipes
			</Link>	
			</>
		)
	}

}


export default CenterPiece