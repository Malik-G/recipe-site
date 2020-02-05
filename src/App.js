import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sources from './pages/Sources';
import SpoonacularPage from './pages/SpoonacularPage';
import EdamamPage from './pages/EdamamPage';
import CampbellsPage from './pages/CampbellsPage';
import Recipe from './pages/Details';
import NotFound from './pages/NotFound';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
	
	
	render() {
		return (
			<>
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/sources" component={Sources} />
					<Route exact path="/spoon" component={SpoonacularPage} />
					<Route exact path="/edamam" component={EdamamPage} />
					<Route exact path="/campbells" component={CampbellsPage} />
					<Route path="/recipe/:id" component={Recipe} />
					<Route path="" component={NotFound} />
				</Switch>
			</Router>
			</>
		);
	}
}

export default App;
