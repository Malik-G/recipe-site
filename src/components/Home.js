import React, { Component } from 'react';
import CenterPiece from '../components/CenterPiece';


class Home extends Component {
	state = {
		image: 0,
		background:'background1'
	}


	componentDidMount() {
		this.nextImage()
		this.runInterval = setInterval(() => this.nextImage(), 7000)
	}

	// componentWillUnmount() {
	// 	this.clearInterval(this.runInterval)
	// }

	nextImage(){
		let imageNumber = this.state.image;
		imageNumber += 1;
		if(imageNumber > 4){
			imageNumber = 1
		}
		switch(imageNumber) {
			case 1: this.setState({image: 1, background:'background1'}); break;
			case 2: this.setState({image: 2, background: 'background2' }); break;
			case 3: this.setState({image: 3, background: 'background3' }); break;
			case 4: this.setState({image: 4, background: 'background4' }); break;
			default: return
		}
	}
	
	render() {
		return (
			<>
			<div className=".container-fluid black">
				<div className={`${this.state.background}`}></div>
				<div className="align-items-center cp-top">
					<div className="col text-center">
						<CenterPiece/>
					</div>
				</div>
			</div>
			
			</>
		)
	}
}

export default Home