import React, { Component } from 'react';
import * as $ from 'axios';
import Demo from './demo.js';
import Order from './order.js';
import UserModal from './userModal.js';
import StyleHeader from '../../components/Style/styleheader';
import StyleFooter from '../../components/Style/stylefooter';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText
} from 'reactstrap';




class Clientpage1 extends Component {


    state = {

        clientID: "",
        providerInfo: {},
        demoList: [],
        orderArray: [],
        orderList: [],

    }

    getOrder = (orderArray) => {

        const orderItems = [];

        orderArray.map((order) => {
            $.get(`/api/orders/${order}`)
                .then((orderData) => {
                    orderItems.push(orderData.data[0]);
                    this.setState({ orderList: orderItems });
                })
                .catch((error) => {
                    console.log(error);
                });

        });

    }

    //Get the particular provider information
    getProvider = () => {
        $.get(`/api/users/${this.state.providerID}`)
            .then((result) => {
                this.setState({ orderArray: result.data.orders });
                this.setState({ providerInfo: result.data });
                this.setState({ demoList: result.data.demo });
                this.getOrder(this.state.orderArray);
                this.setState({ isUserUpdate: false });

            })
            .catch(function (error) {
                console.log(error);
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
                    <Row className="mt-5">
                        <Col xs="12" md="6">
                            <Row className="mt-5">
                                <Col xs="12">
                                    <Card>
                                        <CardImg top width="100%" src={this.state.providerInfo.profile_picture} alt="Card image-fluid cap" />
                                        <CardBody>
                                            <CardTitle>Provider: {this.state.providerInfo.userId}</CardTitle>
                                            <CardSubtitle>Category: {this.state.providerInfo.job_category}</CardSubtitle> <br />
                                            <CardText>
                                                Password: XXXXXXXXXX <br />
                                                Phone: {this.state.providerInfo.phone} <br />
                                                Street Address: {this.state.providerInfo.street} <br />
                                                City: {this.state.providerInfo.city} <br />
                                                State: {this.state.providerInfo.state} <br />
                                                Country: {this.state.providerInfo.country} <br /><br />
                                            </CardText>
                                            <UserModal getProvider={this.getProvider} />
                                        </CardBody>
                                    </Card>

                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12" md="6">
                            <Row className="mt-5">
                                <Col xs="12">
                                    <Card>
                                        <CardBody>
                                            <CardText>
                                                Availability: {this.state.providerInfo.availability ? "Yes" : "No"} <br />
                                                Will Work for: $ {this.state.providerInfo.budget} <br />
                                            </CardText>
                                            <UserModal getProvider={this.getProvider} />
                                        </CardBody>
                                    </Card>

                                </Col>
                            </Row>
                            <Row className="mt-5 mb-5">
                                <Col xs="12">
                                    <Demo demoList={this.state.demoList} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>
                                    <Order orderList={this.state.orderList} />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <StyleFooter />
            </div>

        )

    }



}

export default Clientpage1;