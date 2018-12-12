import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { login0, login1 } from '../../components/Auth/Auth';
import { Container, Jumbotron, Row, Col, Fa, NavLink, Nav, Footer } from "mdbreact"
import { Card, CardBody, CardImage, CardTitle, CardText, MDBCol, MDBRow } from 'mdbreact';
import CarouselPage from './CarouselPage';

import FabWidget from '../../components/Fashion/FashionWidget';
import StyleHeader from '../../components/Style/styleheader'
import StyleFooter from '../../components/Style/stylefooter'
import OtherServices from './OtherServices'
import Slider from '../HomePage/Slider'


class Homepage extends Component {
    click = () => {
        console.log("clicked")
    }
    render() {
        return (
            <div className="mainBody">
                <div>
                    <StyleHeader />
                    <img className="background" src="https://princefan046.com/wp-content/uploads/2018/12/mirroredbackground.jpg"></img>
                    <Slider />
                    <FabWidget />                   
                   <OtherServices />
                </div>
                <div>
                    <StyleFooter />
                </div >
            </div>
        )
    }
}


export default Homepage;