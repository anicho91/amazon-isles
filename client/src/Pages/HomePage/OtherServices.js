import React, { Component } from "react";
import { Container, Jumbotron, Row, Col, Fa, NavLink, Footer } from "mdbreact"
import { Card, CardBody, CardImage, CardTitle, CardText, MDBCol, MDBRow } from 'mdbreact';

class OtherServices extends Component {



  render() {
    return (
       
        
        <Row>
            <Col className="shadow-box-example z-depth-5">
                <Card className="card animate fadeInDown one ">
                    < CardImage className="card-img-top" src="https://princefan046.com/wp-content/uploads/2018/12/ezgif.com-resize-1ttt.jpg" alt="Card image cap"></ CardImage>
                    <CardBody>
                        <h4 className="card-title"><a>Custom Clothing</a></h4>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-secondary">See More</a>
                    </CardBody>
                </Card>
            </Col>
            <Col className="shadow-box-example z-depth-5">
                <Card className="card animate fadeInDown two">


                    < CardImage className="card-img-top" src="https://princefan046.com/wp-content/uploads/2018/12/20181212_040942.png" alt="Card image cap"></ CardImage>
                    <CardBody>
                        <h4 className="card-title"><a>Custom Shoes </a></h4>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-secondary">See More</a>
                    </CardBody>
                </Card>
            </Col>
            <Col className="shadow-box-example z-depth-5">
                <Card className="card animate fadeInDown three">
                    < CardImage className="card-img-top" src="https://princefan046.com/wp-content/uploads/2018/12/20181212_040531.png" alt="Card image cap"></ CardImage>
                    <CardBody>
                        <h4 className="card-title"><a>Custom Jewelry</a></h4>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-secondary">See More</a>
                    </CardBody>
                </Card>
            </Col>
            <Col className="shadow-box-example z-depth-5">
                <Card className="card animate fadeInDown four">
                    < CardImage className="card-img-top" src="https://princefan046.com/wp-content/uploads/2018/12/20181212_041029.png" alt="Card image cap"></ CardImage>
                    <CardBody>
                        <h4 className="card-title"><a>Custom Knits</a></h4>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-secondary">See More</a>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        );
          }
        }
             

 export default OtherServices;
