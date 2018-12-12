import React from 'react';
import { FlippingCard, Card, CardBody, Col, Fa, CardUp, Avatar } from 'mdbreact';
    

const Orders = (props) => ( 
    <div>
        <h3>My Orders</h3>
            {props.fname} <img src={props.fpic} className='image' alt='test holder' />
            {props.gname} <img src={props.gpic} className='image' alt='test holder' />
    </div>   
);

export default Orders;