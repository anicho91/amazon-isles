import React, { Component } from 'react';
import * as $ from 'axios';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modal'; 
import ModalExample from './modal';

class App extends Component {

  state = {
    notesList: [],
    newNote: ''
  }

  handleChange = (event) => {
    this.setState({newNote: event.target.value})
  }

  handleClick = (event) => {
    event.preventDefault();
    /*
    $.post('/api/note', {content: this.state.newNote})
    .then((result) => {
      console.log(result.data);
    }) */
  }
  componentDidMount(){
    /* $.get('/api/notes')
    .then((result) => {
      this.setState({notesList: result.data})
    }) */
  }


  render() {
    return (
      <div className="App">
       
      <Nav className="navbar"><h1><b>SITE TITLE</b></h1>
      <h3><i>WELCOME</i></h3>
            <div > <ModalExample/>        
      </div>
       
        </Nav>
        <div >
              
      </div>
      </div>
  

    );
  }
}

export default App;
