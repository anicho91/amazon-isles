import React from "react";
import { Button, Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from "mdbreact";

import { logout } from "../Auth/Auth";

class StyleHeader2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <Navbar className="stickyNav" dark expand="md" scrolling fixed="top">
          <NavbarBrand href="/">
            <img
              className="logo"
              src="https://media.giphy.com/media/a0zJgGLKPY4vu/giphy.gif"
            />
            <strong>AmazonIsles</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.onClick} />
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav right>
              <NavItem className="navtext">
                <NavLink to={`/`}>Home</NavLink>
              </NavItem>
              <NavItem className="navtext">
                <NavLink to={`/client`}>Profile</NavLink>
              </NavItem>
              <NavItem className="navtext">
                <NavLink to={`/fashion`}>Design</NavLink>
              </NavItem>
              

              <Button className="navbutton" onClick={logout}>
                LogOut
              </Button>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default StyleHeader2;
