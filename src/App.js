import React , { Component } from 'react';
import './Assets/css/styles.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Navbar from  './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Portdetail from './Components/Portdetail';
import {BrowserRouter , Route, Switch } from 'react-router-dom';

class App extends Component {
	render(){
		return(
			
		<BrowserRouter>
		<div>
		<Navbar/>	
		<Switch>

		<Route exact path="/" component={Home} />
		<Route path="/About" component={About} />
		<Route path="/Portfolio" component={Portfolio} />
		<Route path="/Contact" component={Contact} />
		<Route path="/Portdetail" component={Portdetail}/>
		<Route component={Error}/>
		</Switch>
		</div>
		</BrowserRouter>
		);
	}

} export default App;