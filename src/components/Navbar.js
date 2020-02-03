import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../styles/Navbar.css';

function Navbar() {
	return (
		<>
		<nav className="navnav navbar navbar-expand navbar-light bg-light align-right">
			
			<Link to="/" className="navbar-brand">
				<img  src={logo} alt="LOGO" />
			</Link>
		
			<div className="collapse navbar-collapse ml-sm-5 show">
				<ul className="navbar-nav">
					<li className="navbar-item">
						<Link to="/" className="nav-link">Home</Link>
					</li>
					<li className="navbar-item">
						<Link to="/sources" className="nav-link">Sources</Link>
					</li>
				</ul>
			</div>
		
		</nav>
		</>
	)
}

export default Navbar