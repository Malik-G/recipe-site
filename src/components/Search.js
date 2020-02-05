import React, { Component } from 'react';

class Search extends Component {
	
	state= {
		search:''
	}

	render() {
		return (
			<>
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-5 text-center">
						<h2>Recipes from{" "} <strong>{this.props.title}</strong></h2>
						<form>
							<label htmlFor="search">Search by keyword. Separate each phrase by a comma.</label>
							<div className="input-group">
								<input1
									type="text"
									name="search" 
									className="form-control"
									placeholder="ex. chicken,beef,shrimp"
									value={this.state.search}
									onChange={this.props.handleChange}
								/>
								<div className="input-group-append">
									<button type="submit" className="input-group-text bg-primary text-white" onClick={this.props.handleSubmit}>
										<i className="fas fa-search"/>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default Search