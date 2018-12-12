
import React, { Component } from 'react';
import './slider1.css'
import { Container, Jumbotron, Row, Col, Fa, NavLink, Nav, Footer } from "mdbreact"

class Slider extends Component {


    render() {
        return (
            <div>
                <Jumbotron className='slider z-depth-5'>
                    <h2 className='fadeInUp delay-5s '><i> 
                        MADE TO MEASURE: BECAUSE YOU ARE UNIQUE AND YOUR CLOTHES SHOULD BE TOO.</i></h2>
                        <br></br>
                    <h3><b>  "NOT A LOOSE FIT, NOT A TIGHT FIT, IT'S YOUR FIT" </b></h3>
                </Jumbotron>

                <video class="video-background" preload="true" muted="true" autoplay="true" loop="true">
                    <source src="https://videos.files.wordpress.com/XtXvuOGo/1080_30_29-77_dec122018_01_hd.mp4" type="video/mp4" />
                </video>

            </div>
        );
    }
}


export default Slider;