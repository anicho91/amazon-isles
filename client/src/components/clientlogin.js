

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';





class ClientLogin extends React.Component {

  constructor(props) {
    super(props);
     state = {
    notesList: [],
    newNote: ''
  }


  render() {
    return (
      <div>


<Form className='login'>
          <span><input type='text' placeholder='Username' className="userinput"></input><input type='text' placeholder='Password' className="userinput"></input> <Button color="info" size="lg" active onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
            <div></div>
          </span></Form>