import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../styles/Navbar.css';

function Navbar() {
	return (
		<>
		<nav className="navbar navbar-expand-sm navbar-light bg-light align-left">
			
			<Link to="/" className="navbar-brand">
				<img  src={logo} alt="LOGO" />
			</Link>
		
			<div className="collapse navbar-collapse ml-sm-5 show">
				<ul className="navbar-nav">
					<li className="navbar-item">
						<Link to="/" className="nav-link">Home</Link>
					</li>
					<li className="navbar-item">
						<Link to="/all-recipes" className="nav-link">Recipes</Link>
					</li>
				</ul>
			</div>
		
		</nav>
		</>
	)
}

export default Navbar