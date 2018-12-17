import React, { Component } from 'react';
import Measurements from './Measurements';
import * as $ from 'axios';
import { Row, Col } from 'reactstrap';
// import '../../Pages/FashionPage/fashionpage.css';





class BodMeas extends Component {

  state = {
    measureList: [],
    addFabric: '',
    newBust: '',
    newWaist: '',
    newHip: '',
    newKnee: '',
    newLeg: '',
    newBP: '',
    newBack: '',
    newArm: '',
    isUpdating: false,
    clientID: localStorage.getItem('token'),
    providerList: []
  }

//Keep for the moment

  //For updating user's measurements
  // updateMeas = (event) => {
  //   event.preventDefault();
  //   this.setState({ isUpdating: false })
  //   const measure = {
  //     bust: this.state.newBust,
  //     waist: this.state.newWaist,
  //     hips: this.state.newHip,
  //     knee_length: this.state.newKnee,
  //     leg_length: this.state.newLeg,
  //     bp_length: this.state.newBP,
  //     back_length: this.state.newBack,
  //     arm_length: this.state.newArm
  //   };
  //   console.log("measure", measure);
  //   $.put(`/api/clients/${this.state.clientID}`, {
  //     measurement: measure
  //   })
  //     .then((result) => {
  //       console.log("PUT measurements");
  //       console.log(result.data);
  //       this.getMeasurements();
  //     });
  // };


  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value })
  // };


  //Get user's measurements from the database  
  // getMeasurements = () => {
  //   console.log("getMeasurements")
  //   $.get(`/api/users/${this.state.clientID}`)
  //     .then((result) => {
  //       console.log("this.state.measureList", this.state.measureList);
  //     });
  // };


  // componentDidMount() {
  //   this.getMeasurements();
  // };


  render() {
    return (

      <div>
        <Row className="justify-content-center">
          <Col xs='12' md='6' className="measImg" >
            <img src={'/assets/images/garments/bodyMeasurements1.gif'} height="600"></img>
          </Col>

          <Col xs='12' md='6' className="meas">
            <Measurements
              inputBust={this.props.measureList.bust}
              inputWaist={this.props.measureList.waist}
              inputHip={this.props.measureList.hips}
              inputKnee={this.props.measureList.knee_length}
              inputLeg={this.props.measureList.leg_length}
              inputBP={this.props.measureList.bp_length}
              inputBack={this.props.measureList.back_length}
              inputArm={this.props.measureList.arm_length}
              changeHandler={this.handleChange}
              clickUpdate={this.updateMeas}
              heading='Body Measurements'
            />
          </Col>

        </Row>

      </div>


    );
  };
};

export default BodMeas;
