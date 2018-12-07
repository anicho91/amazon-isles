import React, { Component } from 'react';
import * as $ from 'axios';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Row,
    Col,
    Form,
    Label,
    Input,
    Jumbotron
  } from 'reactstrap';


class Providerpage extends Component {


    state = {

    }

    render(){
        return(
            <div>
            <Jumbotron className='navbar'>
                    <h1 className="header">
                        <img className="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/234228/backdrop.jpg"></img>
                        AMAZONISLES
                    </h1>
            </Jumbotron>

            

            </div>

        )

    }



}

export default Providerpage;