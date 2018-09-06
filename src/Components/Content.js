import React, { Component } from 'react';
import CardContent from'./CardContent';
import {Container, Row, Col} from'reactstrap';
class Content extends Component {
	render(){
		return(
			<div>

			
			<Container className="mt-5">
			<Row>
			<Col xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
			<Col xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
			<Col xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
			<Col xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
			<Col xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
			<Col xs="12" sm="6" md="4">
			<CardContent/>
			</Col>
			</Row>
			</Container>
			</div>
			);
	}
} export default Content;