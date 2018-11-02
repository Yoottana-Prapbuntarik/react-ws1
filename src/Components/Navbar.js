import React , {Component} from 'react';
import '../Assets/css/styles.css';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem  } from 'reactstrap';
 import {NavLink , Link} from 'react-router-dom'
 class Navigation extends Component{
 constructor(props){
   super(props);
   this.closeNav = this.closeNav.bind(this);
   this.toggle = this.toggle.bind(this);
   this.state = {
    isOpen : false
   };
  }
  closeNav(){
    this.setState({
isOpen : false
    });
  }
   toggle() {
     this.setState({
     isOpen: !this.state.isOpen
    });
   
 }

  render(){
  
      return(
        <div>
        <Navbar className="text-center alpha fixed-top" dark   expand="md">
          <Link className="navbar-brand" to="/">Yoottana Nap</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem  className="navbarLink">
                <NavLink to="/" onClick={this.closeNav}>Home</NavLink>
              </NavItem>

              <NavItem className="navbarLink">
                <NavLink to="/About" onClick={this.closeNav}>About</NavLink>
              </NavItem>
               <NavItem className="navbarLink">
                <NavLink to="/Portfolio" onClick={this.closeNav}>Portfolio</NavLink>
              </NavItem>
               <NavItem className="navbarLink">
                <NavLink to="/Contact" onClick={this.closeNav}>Contact</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    
      );
}
    }
export default Navigation;