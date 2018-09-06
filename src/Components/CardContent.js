import React , {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button ,Container  } from 'reactstrap';
import '../Assets/css/styles.css';
import {NavLink} from 'react-router-dom'

class CardContent extends Component{
 

render(){
	return(
        <div>
         <Container className="wrap-card-img">
      <Card className="h-100">
        <NavLink className="wrapper-card-img" to ="/Portdetail">
         <CardImg className="card-img-top text-center" src="https://images.unsplash.com/photo-1534353875273-b5887cc1abf5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f19b3587a3ced9fadd1abd4716e81212&auto=format&fit=crop&w=634" alt="Card image cap" />
        </NavLink>
        <CardBody>
          <CardTitle>หัวเรื่อง</CardTitle>
          <CardSubtitle>
          รายละเอียดเบื้องต้น
          </CardSubtitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tempore, in, sunt porro ullam recusandae vero, tempora ea dicta deserunt, explicabo alias. Excepturi aut numquam, inventore delectus. Autem, aut, sint!
          </CardText>
          <Button className="w-100">
          Button
          </Button>
          </CardBody>
          
      </Card>
   </Container>
      </div>

		);
}
}
export default CardContent;