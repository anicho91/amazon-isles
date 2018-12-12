import React, { Component } from 'react';

import BodMeas from '../../components/Fashion/BodyMeasurements';
import FabWidget from '../../components/Fashion/FashionWidget';
import StyleHeader from "../../components/Style/styleheader";
import StyleFooter from "../../components/Style/stylefooter";

// import * as $ from 'axios';
import './fashionpage.css';







class App extends Component {

  state = {
    
    clientID: "5c0dd73242d9c31a00e69e31"
  }



  render() {
    return (
      <div>
        <div className="row spacer">
        <StyleHeader />
        </div>           

        
          <div className="row spacer">
          <FabWidget/> 
          </div>

          

          <div className="row spacer">
          {/* <BodMeas/> */}
          </div>


       

        <div className="row">
        <StyleFooter />
        </div>              
      </div>
    );
  };
};

export default App;
