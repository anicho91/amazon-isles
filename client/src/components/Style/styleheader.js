import React, { Component } from 'react';
import { Jumbotron } from "mdbreact"
import { Button, Col, Row, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
                    <Col>
                        <h1 className="header">
                            <img className="logo" src="https://media.giphy.com/media/a0zJgGLKPY4vu/giphy.gif"></img>
                            AMAZONISLES
                    </h1><div><p className="subtitle animate fadeInDown four ">reclaiming my time</p></div></Col>
                    <div><Button classname="navbutton" color="primary" onClick={login}>Log in</Button><Button classname="navbutton" color="secondary">Join Us</Button></div>

                </Jumbotron>
        </div>
      )
    }
  }

export default StyleHeader