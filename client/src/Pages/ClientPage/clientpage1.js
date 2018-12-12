import React, { Component } from 'react';
import * as $ from 'axios';
import Demo from './demo';
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

        clientID: "5c1089b2307461050dfed0dd",
        clientInfo: {},
        demoList: [],
        measurement:{},
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
    getClient = () => {
        $.get(`/api/users/${this.state.clientID}`)
            .then((result) => {
                console.log(result);
                this.setState({ orderArray: result.data.orders });
                this.setState({ clientInfo: result.data });
                this.setState({ measurement: result.data.measurement });
                this.getOrder(this.state.orderArray);
                this.setState({ isUserUpdate: false });

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    componentDidMount() {
        this.getClient();
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
                                        <CardImg top width="100%" src={this.state.clientInfo.profile_picture} alt="Card image-fluid cap" />
                                        <CardBody>
                                            <CardTitle>Client ID: {this.state.clientInfo.userId}</CardTitle>
                                            <CardSubtitle></CardSubtitle> <br />
                                            <CardText>
                                                Phone: {this.state.clientInfo.phone} <br />
                                                Street Address: {this.state.clientInfo.street} <br />
                                                City: {this.state.clientInfo.city} <br />
                                                State: {this.state.clientInfo.state} <br />
                                                Country: {this.state.clientInfo.country} <br /><br />
                                            </CardText>
                                            <UserModal getClient={this.getClient} />
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
                                                Measurement <br />
                                                Bust: {this.state.measurement.bust} <br />
                                                Weist: {this.state.measurement.waist} <br />
                                                Hips: {this.state.measurement.hips} <br />
                                                Knee Length: {this.state.measurement.knee_length} <br />
                                                Leg Length: {this.state.measurement.leg_length} <br />
                                                BP Length: {this.state.measurement.bp_length} <br />
                                                Back Length: {this.state.measurement.back_length} <br />
                                                Arm Length: {this.state.measurement.arm_length} <br />
                                            </CardText>
                                            <UserModal getClient={this.getClient} />
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