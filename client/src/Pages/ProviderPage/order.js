import React from 'react';
import { Row, Col, Container } from 'reactstrap';



const Order = (props) => (
        <Container>
            <h1>My Accepted Order</h1>
            <h3>Please contact us for cancelling the order to complete</h3>
            {props.orderList.map(order => (

                <Row key={order._id} className="mb-5">

                    <Col xs="12" md="4">
                        <p>Fabric Name: {order.fabric.fabric_name}</p>
                        <img src={order.fabric.fabric_pic} className="img-fluid" alt="Responsive" />
                    </Col>
                    <Col xs="12" md="4">
                        <p>Garment Name: {order.garment.garment_name}</p>
                        <p>Garment Length: {order.garment.garment_length}</p>
                        <img src={order.garment.garment_pic} className="img-fluid" alt="Responsive" />
                    </Col>
                    <Col xs="12" md="4">
                        <p>Budget: ${order.budget}</p>
                    </Col>

                </Row>

            ))
            }
        </Container>
);

export default Order;