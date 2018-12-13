import React, { Component } from 'react';

import BodMeas from '../../components/Fashion/BodyMeasurements';
import FabWidget from '../../components/Fashion/FashionWidget';
import StyleHeader2 from "../../components/Style/styleheader2";
import StyleFooter from "../../components/Style/stylefooter";
import Slider from '../HomePage/Slider'

// import * as $ from 'axios';
import './fashionpage.css';







class App extends Component {

  state = {

    clientID: "5c0dd73242d9c31a00e69e31"
  }



  render() {
    return (
      <div>

          <StyleHeader2 />

        <div className="fashionrow">
        
          


          {/* <div className="col4"> */}
           
          {/* </div> */}

          <video class="video-fashion" preload="true" muted="true" autoplay="true" loop="true">
                    <source src="https://videos.files.wordpress.com/EMNRGwmJ/1080_30_29.77_Dec122018_05_hd.mp4" type="video/mp4" />
                </video>
                <FabWidget />
                <BodMeas />

        </div>

        {/* <div className="row"> */}
          <StyleFooter />
        {/* </div> */}
      </div>
    );
  };
};

export default App;
