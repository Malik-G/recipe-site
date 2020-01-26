import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllRecipes from './components/AllRecipes';
import NotFound from './components/NotFound';
import Recipe from './components/Recipe';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	
	
	render() {
		return (
			<>
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/all-recipes" component={AllRecipes} />
					<Route path="/recipe/:id" component={Recipe} />
					<Route path="" component={NotFound} />
				</Switch>
			</Router>
			</>
		);
	}
}

export default App;
