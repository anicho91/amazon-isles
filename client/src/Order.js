import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const Order = (props) => (
        <Container>
            {props.orderList.map(order => (

                <Row key={order._id}>

                    <Col xs="12" md="4">
                        Budget: ${order.budget}
                    </Col>
                    <Col xs="12" md="4">
                        <h3>Fablic Name: {order.fabric.fabric_name}</h3>
                        <img src={order.fabric.fabric_pic} className="img-fluid" alt="Responsive image" />
                    </Col>
                    <Col xs="12" md="4">
                        <p>Garment Name: {order.garment.garment_name}</p>
                        <img src={order.garment.garment_pic} className="img-fluid" alt="Responsive image" />
                        <p>Garment Length: {order.garment.garment_length}</p>
                    </Col>

                </Row>

            ))
            }
        </Container>
);

export default Order;