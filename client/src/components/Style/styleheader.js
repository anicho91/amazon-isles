import React from 'react';
import { Button, Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { login0, login1 } from '../Auth/Auth'

class StyleHeader extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}

render() {
  
  
    return(
      <div>
        
        <Navbar className="stickyNav" dark expand="md" scrolling fixed="top">
          <NavbarBrand href="/">
          <img className="logo" src="https://media.giphy.com/media/a0zJgGLKPY4vu/giphy.gif"/><strong>AmazonIsles</strong>
          </NavbarBrand>
          <NavbarToggler onClick={ this.onClick } />
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav right>
              <NavItem className="navtext">
                  <NavLink to={`/`}>Home</NavLink>
              </NavItem>              

              <Button className="navbutton" onClick={login0}>Client Login</Button>
              <Button className="navbutton" onClick={login1}>Provider Login</Button>  
              
            </NavbarNav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}

export default StyleHeader;