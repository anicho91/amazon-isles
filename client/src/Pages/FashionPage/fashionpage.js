import React, { Component } from 'react';

import BodMeas from '../../components/Fashion/BodyMeasurements';
import FabWidget from '../../components/Fashion/FashionWidget';
import StyleHeader2 from "../../components/Style/styleheader2";
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

          <StyleHeader2 />

        <div className="fashionrow">
        
          <FabWidget />


          {/* <div className="col4"> */}
            <BodMeas />
          {/* </div> */}


        </div>

        {/* <div className="row"> */}
          <StyleFooter />
        {/* </div> */}
      </div>
    );
  };
};

export default App;
