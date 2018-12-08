import React, { Component } from 'react';
import * as $ from 'axios';
import Demo from './demo.js';
import StyleHeader from '../../components/Style/styleheader';
import StyleFooter from '../../components/Style/stylefooter';
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
    Jumbotron,
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText,
    Table
} from 'reactstrap';

  


class Providerpage extends Component {


    state = {

        providerID: "5c0b5bda96f5c0094f843efe",
        providerInfo: {},
        demoList:[]

    }

    getProvider = () => {
        $.get(`/api/users/${this.state.providerID}`)
            .then((result) => {
                console.log(result.data);
                this.setState({providerInfo: result.data});
                this.setState({demoList: result.data.demo});
                
            });
    }

    componentDidMount() {
        this.getProvider();
    }

    render() {
        return (
            <div>
                <StyleHeader />
                <Container>
                    <Row>
                        <Col xs="12" md="6">
                            <Row>
                                <Col xs="12">
                                    <Card>
                                        <CardImg top width="100%"  src={this.state.providerInfo.profile_picture} alt="Card image-fluid cap" />
                                        <CardBody>
                                            <CardTitle>Provider: {this.state.providerInfo.userId}</CardTitle>
                                            <CardSubtitle>Category: {this.state.providerInfo.job_category}</CardSubtitle> <br />
                                            <CardText>
                                                <p>Password: {this.state.providerInfo.password}</p>
                                                <p>Phone: {this.state.providerInfo.phone}</p>
                                                <p>Street Address: {this.state.providerInfo.street}</p>
                                                <p>City: {this.state.providerInfo.city}</p>
                                                <p>State: {this.state.providerInfo.state}</p>
                                                <p>Country: {this.state.providerInfo.country}</p>
                                                <Button>Update</Button>
                                            </CardText>
                                        </CardBody>
                                    </Card>

                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12" md="6">
                            <Row>
                                <Col xs="12">
                                    <Card>
                                        <CardBody>
                                            <CardText>
                                                <p>Availability: {this.state.providerInfo.availability ? "Yes" : "No"}</p>
                                                <p>Will Work for: {this.state.providerInfo.budget}</p>
                                                <Button>Update</Button>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                <Demo demoList={this.state.demoList}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">

                        </Col>
                    </Row>
                </Container>
                <StyleFooter />
            </div>

        )

    }



}

export default Providerpage;