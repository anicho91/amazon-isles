import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
    

const Orders = (props) => ( 
    

        <Container className='orderPart'><br/>
            
            

                <Row key={props.id} className="myOrder">

                    <Col>
                        <p><strong>Fabric Name:</strong> {props.fname}</p>
                        <img src={props.fpic} className="img-fluid fabricCard" alt="Responsive image" />
                    </Col>
                    <Col>
                        <p><strong>Garment Name:</strong> {props.gname}</p>
                        
                        <img src={props.gpic} className="img-fluid" alt="Responsive image" />
                    </Col>
                    

                </Row>
                
                

            
        </Container>
     
);

export default Orders;