import React , {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle ,Container  } from 'reactstrap';
import '../Assets/css/styles.css';
import {NavLink,Link} from 'react-router-dom'

class ContentCard extends Component{
 

render(){
  let {title,sTitle,Text,imgSrc} = this.props;
	return(
        <div>
         <Container className="wrap-card-img my-5">
     <div className="shadows">
      <Card>
        <NavLink className="wrapper-card-img" to ="/Portdetail">
         <CardImg className="card-img-top text-center" src={imgSrc} alt="Card image cap" />
        </NavLink>
        <CardBody className="text-center">
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>
          {sTitle}
          </CardSubtitle>
          <CardText>
          {Text} 
          </CardText>
          <Link  className=" btn btn-primary w-100" to="/Portdetail">
          Button
          </Link>
          </CardBody>
          
      </Card>
      </div>
   </Container>
      </div>

		);
}
}
export default ContentCard;