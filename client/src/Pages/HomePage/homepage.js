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
import Slider1 from './slider1'

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

 
 <section></section>
              

              

<h2 className='animated fadeInLeftBig'><i className='fadeInUp' >HELLO</i></h2>
              <Slider1></Slider1>         
                
                <div className="FabWidgetplaceholder">
                <FabWidget/>
                </div>
            </div>
            <div className="cardboxs">

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