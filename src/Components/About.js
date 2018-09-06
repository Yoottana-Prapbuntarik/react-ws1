import React, { Component } from 'react';
import CardContent from'./CardContent';
import Footer from './Footer';
import {Container, Row, Col} from'reactstrap';
class About extends Component {
	render(){
		return(
			<div>

			
			<Container className="mt-5">
			<Row>
			<Col className="my-2" xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
			<Col className="my-2" xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
			<Col className="my-2" xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
				<Col className="my-2" xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
				<Col className="my-2" xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
				<Col className="my-2" xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
		
			</Row>
			</Container>
			<Footer/>
			</div>
			);
	}
} export default About;