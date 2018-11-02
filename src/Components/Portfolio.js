import React, { Component } from 'react';
import Footer from './Footer';
import ContentCard from'./ContentCard';
import {Container,Col,Row} from'reactstrap';
import '../Assets/css/styles.css';
import code1  from'../Assets/images/code1.jpg' 
import mylife from'../Assets/images/mylife.jpg';
class Portfolio extends Component {
	render(){
		return(
			<div>
      <Container className="center mt-5">
      <Row>
        <Col sm="6" md="4">
      <ContentCard imgSrc={mylife} title="About Me" sTitle="My name is Yoottana Prapbuntarik" 
      Text={[" My dream is programmer & ",<br/>,
      "i love to developer. "]}/>
    </Col>
        <Col sm="6" md="4">
      <ContentCard imgSrc={code1} title="Hobby" sTitle="My hobby is programming every time " Text={["i like to liten to music" ,<br/>,"rock and rap brand."]}/>
    </Col>
        {/* <Col sm="6" md="4">
      <ContentCard title="Test1" sTitle Text/>
        </Col>
        <Col sm="6" md="4">
      <ContentCard title="Test2" sTitle Text/>
    </Col> */}
     
        </Row>
      </Container>
         <Footer />
            </div>			
			);
	}
} export default Portfolio;