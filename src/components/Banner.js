import React, { Component } from 'react';

class Banner extends Component {
	state = {
		image: 0,
		bannerImg: 'banner1'
	}

	componentDidMount() {
		this.nextImage()
		this.runInterval = setInterval(() => this.nextImage(), 6000)
	}

	// componentWillUnmount() {
	// 	this.clearInterval(this.runInterval)
	// }

	nextImage() {
		let imageNumber = this.state.image;
		imageNumber += 1;
		if (imageNumber > 3) {
			imageNumber = 1
		}
		switch (imageNumber) {
			case 1: this.setState({ image: 1, bannerImg: 'banner1' }); break;
			case 2: this.setState({ image: 2, bannerImg: 'banner2' }); break;
			case 3: this.setState({ image: 3, bannerImg: 'banner3' }); break;
			default: return
		}
	}

	render() {
		return (
			<>
				<div className=".container-fluid black">
					<div className={`${this.state.bannerImg}`}></div>
					<div className="align-items-center banner-text">
						<div className="col text-center">
							<h1 >{this.props.bannerText}</h1>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Banner