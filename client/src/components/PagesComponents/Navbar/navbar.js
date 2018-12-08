import React from 'react';
import {Navbar,NavbarBrand, Form} from 'reactstrap';

const Navigation = (props) => (
    <Navbar light expand="md" className="my-auto naviguation">
        <NavbarBrand href="/" id="brand">AmazonIsles</NavbarBrand>
        <Form className="ml-auto">
            {props.children}
        </Form>
    </Navbar>
)

export default Navigation;

