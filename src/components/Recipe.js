import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardDetails from './CardDetails'

class Recipe extends Component {
	render() {
		const { title, image, url, ingredients } = this.props.re;
		return (
			<>
				<div className="col-10 mx-auto col-md-6 col-lg-4 my3 margin-bottom">
					<div className="card" style={{ height: "100%" }}>
						<img
							src={image}
							style={{ height: "14rem" }}
							className="img-card-top"
							alt="N/A"
						/>
						<div className="card-body">
							<h6>{title}</h6>
							{/* <h6 className="text-warning">{publisher}</h6> */}
						</div>
						<div className="card-footer">
							<CardDetails i={ingredients}/>
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