import  React,  {Component } from 'react';
import { Button} from 'reactstrap';
import {login0} from '../../components/Auth/Auth';
import {login1} from '../../components/Auth/Auth';
import Naviguation from '../../components/PagesComponents/Navbar/navbar';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import custImage from '../../components/Images/customer.jpeg';
import provImage from '../../components/Images/provider.jpeg'



class Homepage extends Component {
    render() {
        return (
            <div>
                <Naviguation >
                    <Link to={`/`} className="naviguation-link">About Us</Link> |
                </Naviguation>
                <Container fluid>
                    <Row>
                        <Col md="6">
                            <Card inverse>
                                <CardImg width="100%" src={custImage} className="card-image img-fluid" alt="Card image cap" />
                                <CardImgOverlay>
                                    <Button color="primary" onClick={login0} className="login-btn">Client</Button>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card inverse>
                                <CardImg width="100%" src={provImage} className="card-image img-fluid" alt="Card image cap" />
                                <CardImgOverlay>
                                        <Button color="secondary" onClick={login1} className="login-btn ">Provider</Button>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
                
            </div>
        )
    }
}
                
       


export default Homepage;