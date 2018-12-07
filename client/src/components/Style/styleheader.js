import React, { Component } from 'react';
import { Jumbotron } from "mdbreact"
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { login } from '../Auth/Auth';

class StyleHeader extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    console.log('login clicked')
  }

    render(){
      return (
        <div>
            <Jumbotron className='navbar'>
                      <h1 className="header">
                          <img className="logo" src="https://media.giphy.com/media/a0zJgGLKPY4vu/giphy.gif"></img>
                          AMAZONISLES
                </h1>
                      <div>
                        
                      <Button className="navbutton" color="primary" onClick={this.handleClick}>Log in</Button>
                      
                      <Button className="navbutton" color="secondary">Join Us</Button></div>

                      
                  </Jumbotron>
        </div>
      )
    }
  }

export default StyleHeader