import React, { Component } from 'react';
import * as $ from 'axios';
import BodMeas from '../../components/Fashion/BodyMeasurements';
import FabWidget from '../../components/Fashion/FashionWidget';
import StyleHeader2 from "../../components/Style/styleheader2";
import StyleFooter from "../../components/Style/stylefooter";
import ProviderInfo from '../../components/Fashion/ProviderDisplay';
import { Row, Col} from 'reactstrap';

// import * as $ from 'axios';
import './fashionpage.css';







class FashionPage extends Component {

  state = {

    clientID: "5c0dd73242d9c31a00e69e31",
    providers: [],
    providerList:[]
  }


//For providers information  
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

        <div>        
          <FabWidget />
        </div>

        <div>
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

        
          <StyleFooter />
        
      </div>
    );
  };
};

export default FashionPage;
