import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipe extends Component {
	render() {
		const { id, title, image, url } = this.props.re;
		return (
			<>
			<div className="col-10 mx-auto col-md-6 col-lg-4 my3 margin-bottom">
				<div className= "card" style={{ height:"100%"}}>
					<img
						src={image}
						style={{height:"14rem"}}
						className="img-card-top"
						alt=""
					/>
					<div className="card-body">
					<h6>{title}</h6>
					{/* <h6 className="text-warning">{publisher}</h6> */}
					</div>
					<div className="card-footer">
						<Link to={`/recipe/${id}`} className="btn btn-primary">
							Details
						</Link>
						<a href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-success mx-2">Recipe URL
						</a>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default Recipe