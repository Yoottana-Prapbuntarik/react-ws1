import React , {Component} from 'react';
import '../Assets/css/styles.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  
 } from 'reactstrap';
 import {NavLink} from 'react-router-dom'



class Navigation extends Component{
 constructor(props){
   super(props);
   this.toggle = this.toggle.bind(this);
   this.state = {
    isOpen : false
   };
  }
   toggle() {
     this.setState({
     isOpen: !this.state.isOpen
    });
   
 }
  render(){

  
      return(
        <div>
        <Navbar className="text-center alpha" light  expand="md">
          <NavbarBrand to="/">Yoottana Nap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>
              <NavItem className="navbarLink">
                <NavLink Link to="/">Home</NavLink>
              </NavItem>

              <NavItem className="navbarLink">
                <NavLink to="/About">About</NavLink>
              </NavItem>
               <NavItem className="navbarLink">
                <NavLink to="/Portfolio">Portfolio</NavLink>
              </NavItem>
               <NavItem className="navbarLink">
                <NavLink to="/Contact">Contact</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    
      );
}
    }
export default Navigation;