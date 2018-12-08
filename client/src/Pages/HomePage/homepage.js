import React, { Component, Fragment } from 'react';
// import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { login0, login1 } from '../../components/Auth/Auth';
import { Container, Jumbotron, Row, Col, MDBBtn, Fa, NavLink, Footer } from "mdbreact"
import { Card, CardBody, CardImage,Button, CardTitle, CardText } from 'mdbreact';
import MultiCarouselPage from './MultiCarouselPage';
import TestimonialsPage from './TestimonialsPage'

class Homepage extends Component {
    click= () => {
        console.log("clicked")
    }
    render() {
        return (
            <div>

                <Jumbotron className='navbar'>
                    <h1 className="header">
                        <img className="logo" src="https://media.giphy.com/media/a0zJgGLKPY4vu/giphy.gif"></img>
                        AMAZONISLES
                    </h1>
                    <div>
                        <Button className="navbutton" color="primary" onClick={login0}>Log in</Button>
                        <Button className="navbutton" color="secondary" onClick={login1}>Join Us</Button>
                    </div>
                </Jumbotron>
                <Container></Container>
                <img className="background" src="https://princefan046.com/wp-content/uploads/2018/12/mirroredbackground.jpg"></img>


                <Row>
                    <Col >
                        <Card className="card animate fadeInDown one ">
                            < CardImage className="card-img-top" src="https://www.fabricfocus.co.uk/wp-content/uploads/2018/10/masina-de-cusut.jpg" alt="Card image cap"></ CardImage>
                            <CardBody>
                                <h4 className="card-title"><a>Custom Tailors</a></h4>
                                <p className="card-text">SewMade4U</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card animate fadeInDown two">
                            < CardImage className="card-img-top" src="https://www.fabricfocus.co.uk/wp-content/uploads/2018/10/masina-de-cusut.jpg" alt="Card image cap"></ CardImage>
                            <CardBody>
                                <h4 className="card-title"><a>Custom Tailors</a></h4>
                                <p className="card-text">SewMade4U</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card animate fadeInDown three">
                            < CardImage className="card-img-top" src="https://www.fabricfocus.co.uk/wp-content/uploads/2018/10/masina-de-cusut.jpg" alt="Card image cap"></ CardImage>
                            <CardBody>
                                <h4 className="card-title"><a>Custom Tailors</a></h4>
                                <p className="card-text">SewMade4U</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card animate fadeInDown four">
                            < CardImage className="card-img-top" src="https://www.fabricfocus.co.uk/wp-content/uploads/2018/10/masina-de-cusut.jpg" alt="Card image cap"></ CardImage>
                            <CardBody>
                                <h4 className="card-title"><a>Custom Tailors</a></h4>
                                <p className="card-text">SewMade4U</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div className="homeplaceholder"></div>
                <div className="homeplaceholder"></div>
                <Container>

                   

                </Container>
                <MultiCarouselPage />

                <div className="homeplaceholder"></div>
                <div className="homeplaceholder"></div>
                <div className="homeplaceholder"></div>
                <div className="homeplaceholder"></div>
                <div className="homeplaceholder"></div>
                <Footer className='footer'>2018 AMAZONISLES</Footer>
            </div >

        )
    }
}


export default Homepage;