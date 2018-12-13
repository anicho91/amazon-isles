import React, { Component } from 'react';
import * as $ from 'axios';
import BodMeas from '../../components/Fashion/BodyMeasurements';
import FabWidget from '../../components/Fashion/FashionWidget';
import StyleHeader2 from "../../components/Style/styleheader2";
import StyleFooter from "../../components/Style/stylefooter";

import Slider from '../HomePage/Slider'

import ProviderInfo from '../../components/Fashion/ProviderDisplay';
import { Row, Col} from 'reactstrap';


// import * as $ from 'axios';
import './fashionpage.css';







class App extends Component {

  state = {

    clientID: "5c0dd73242d9c31a00e69e31",
    providers: [],
    providerList:[]
  }

  clickHandler = (event) => {
    event.preventDefault();

    $.get('/api/users')
      .then((userData) => {
        console.log(userData);
        const providers = userData.data.filter((elem) => elem.category.includes("provider"))
        this.setState({ providerList: providers })
        console.log('I am result', providers);

      })
      .catch((error) => {
        console.log(error);
      })

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

        <Row className="providerrow mt-5">
          <Col xs="12">
          <div className="text-right">
            <button onClick={this.clickHandler} >Display Available Provider</button>
          </div>
          <ProviderInfo providerList={this.state.providerList}/>
          </Col>
        </Row>

        {/* <div className="row"> */}
          <StyleFooter />
        {/* </div> */}
      </div>
    );
  };
};

export default App;
