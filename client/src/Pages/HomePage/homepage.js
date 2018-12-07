import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { login } from '../../components/Auth/Auth';
import { Container, Jumbotron, Row, Col, Fa, NavLink, Footer } from "mdbreact"
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import MultiCarouselPage from './MultiCarouselPage'

class Homepage extends Component {
    render() {
        return (
            <div>

                <Jumbotron className='navbar'>
                    <h1 className="header">
                        <img className="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/234228/backdrop.jpg"></img>
                        AMAZONISLES
              </h1>
                    <div><Button classname="navbutton" color="primary" onClick={login}>Log in</Button><Button classname="navbutton" color="secondary">Join Us</Button></div>
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

            <Footer className='footer'>2018 AMAZONISLES</Footer>
            </div >
            
        )
    }
}


export default Homepage;