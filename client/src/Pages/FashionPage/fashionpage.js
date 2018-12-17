import React, { Component } from 'react';
import * as $ from 'axios';
import BodMeas from '../../components/Fashion/BodyMeasurements';
import FabWidget from '../../components/Fashion/FashionWidget';
import Composite from '../../components/Fashion/Composite';
import StyleHeader2 from "../../components/Style/styleheader2";
import StyleFooter from "../../components/Style/stylefooter";
import ProviderInfo from '../../components/Fashion/ProviderDisplay';
import { Row, Col } from 'reactstrap';

// import * as $ from 'axios';
import './fashionpage.css';







class FashionPage extends Component {

  state = {

    clientID: "5c0dd73242d9c31a00e69e31",
    token:localStorage.getItem('token'),
    measurement: {},
    providerId: "",
    providers: [],
    providerList: []
  }


  //For providers information  
  clickHandler = (event) => {
    event.preventDefault();

    $.get('/api/users')
      .then((userData) => {
        console.log(userData);
        const providers = userData.data.filter((elem) => elem.category.includes("provider"));
        this.setState({ providerList: providers });
        console.log('I am result', providers);

      })
      .catch((error) => {
        console.log(error);
      })

  }

  clickProvider = (event) => {

    event.preventDefault();

    this.setState({ providerId: event.target.name });
    console.log("provider ID", event.target.name);


  }

  componentDidMount() {

    $.get(`/api/users/${this.state.token}`)
    .then((clientData) => {
      this.setState({measurement: clientData.data.measurement});
    })
    .catch((error) => {
      console.log(error);
    })

  }



  render() {
    return (
      <div>

        <StyleHeader2 />

        <Row>

          <Col xs='12'>
            <FabWidget />

          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs='12'>

            <BodMeas measureList={this.state.measurement}/>
          </Col>

        </Row>

        <Row className="providerrow mt-5">
          <Col xs="12">
            <div className="text-right">
              <button onClick={this.clickHandler} >Display Available Provider</button>
            </div>

            <ProviderInfo providerList={this.state.providerList} clickProvider={this.clickProvider} />np
          </Col>
        </Row>

        <Row>
        <Composite
              key={this.state.newFabric}
              idF={this.state.newFabric}
              idG={this.state.newGarment}
              clickHandler={this.handleSubmit}
            />
        </Row>

        <StyleFooter />

      </div>
    );
  };
};

export default FashionPage;
