import React, { Component } from "react";
import {Container, Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
    
      <Carousel className='Carousel' activeItem={1} length={4} showControls={false} showIndicators={false} className="z-index: -10;">
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img className="slide d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
              <Mask overlay="black-light" />
            </View>
            
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img className="slide d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
              <Mask overlay="black-strong" />
            </View>
            
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img className="slide d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
              <Mask overlay="black-slight" />
            </View>
            
          </CarouselItem>
          <CarouselItem itemId="4">
            <View>
              <img className="slide d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
              <Mask overlay="black-light" />
            </View>
            
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;