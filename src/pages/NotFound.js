import React, { Component } from 'react';
import CenterPiece from '../components/CenterPiece';

class NotFound extends Component {
	render() {
		return (
			<>
			<div className=".container-fluid">
				<div className="row align-items-center background-404">
					<div className="col text-center">
						<CenterPiece customTitle="Page Not Found"/>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default NotFound