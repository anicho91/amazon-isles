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
    Jumbotron,
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText
} from 'reactstrap';


class Providerpage extends Component {


    state = {

        providerID: "5c0ab21847722a09b155914c",
        providerInfo: {}

    }

    getProvider = () => {
        $.get(`/api/users/${this.state.providerID}`)
            .then((result) => {
                this.setState({ providerInfo: result.data[0] });
                console.log(this.state.providerInfo);
            })
    }

    componentDidMount() {
        this.getProvider();
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="12" md="6">
                            <Row>
                                <Col xs="12">
                                    <Card>
                                        <CardImg top width="100%" src={this.state.providerInfo.profile_picture} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>Provider: {this.state.providerInfo.userId}</CardTitle>
                                            <CardSubtitle>Category: {this.state.providerInfo.job_category}</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        </CardBody>
                                    </Card>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>

        )

    }



}

export default Providerpage;