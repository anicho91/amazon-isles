import React, { Component } from 'react';
import * as $ from 'axios';
import Demo from './demo.js';
import Order from './order.js';
import UserModal from './userModal.js';
import { setSession, getIdToken} from '../../components/Auth/Auth';
import jwt_decode from 'jwt-decode';
import StyleHeader2 from '../../components/Style/styleheader2';
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




class Providerpage extends Component {


    state = {

        token: "",
        name:"",

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

    initiateSession = () => {
        let idToken = getIdToken();
        let info = jwt_decode(idToken);
        localStorage.setItem("token", info.sub);
        localStorage.setItem("name", info.given_name);
        this.setState({
          token: info.sub,
          name: info.nickname
        })
        console.error("I am the token in initiateSession",this.token)
    }

    //Get the particular provider information
    getProvider = () => {
        $.get(`/api/users/${localStorage.getItem('token')}`)
            .then((result) => {
                this.setState({ orderArray: result.data.orders });
                this.setState({ providerInfo: result.data });
                this.setState({ demoList: result.data.demo });
                this.getOrder(this.state.orderArray);
                this.setState({ isUserUpdate: false });
                console.log(this.state.providerInfo);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    componentDidMount() {
        if (getIdToken()) {
            this.initiateSession();
          } else {
            setSession();
            this.initiateSession();
          }
      
          this.setState({
            token: localStorage.getItem('token'),
            name: localStorage.getItem('name')
          });
      
      
          $.post('/api/session', {
            token: localStorage.getItem('token')
          }).then((response) => {
      
            const sessionData = response.data;

            if (sessionData === null) {
              $.post('/api/users', {
                token: this.state.token,
                userId: localStorage.getItem('name'),
                category: "provider"
              }).then((response) => {
                
              })
            }
            this.getProvider();
          });
      
       
    }

    render() {
        return (
            <div>
                <StyleHeader2 />
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
                                    { this.state.demoList ?
                                    <Demo demoList={this.state.demoList} /> : <p>No Demo Information</p>
                                    }
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

export default Providerpage;