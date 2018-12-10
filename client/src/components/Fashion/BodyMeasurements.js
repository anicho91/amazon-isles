import React, { Component } from 'react';
import Measurements from './Measurements';
import * as $ from 'axios';
// import './fashionpage.css';
import '../../Pages/FashionPage/fashionpage.css'





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
    clientID: "5c0dd73242d9c31a00e69e31"
  }


  updateMeas = (event) => {
    event.preventDefault();
    this.setState({ isUpdating: false })
    const measure = {
      bust: this.state.newBust,
      waist: this.state.newWaist,
      hips: this.state.newHip,
      knee_length: this.state.newKnee,
      leg_length: this.state.newLeg,
      bp_length: this.state.newBP,
      back_length: this.state.newBack,
      arm_length: this.state.newArm
    };
console.log("measure", measure);
    $.put(`/api/clients/${this.state.clientID}`, {
      measurement: measure
    })
      .then((result) => {
console.log("PUT measurements");
console.log(result.data);
        this.getMeasurements();
      });
  };


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };
           
  getMeasurements = () => {
console.log("getMeasurements")
    $.get(`/api/users/${this.state.clientID}`)
      .then((result) => {
        this.setState({ measureList: result.data.measurement })
console.log("this.state.measureList", this.state.measureList);
      });
  };


  componentDidMount() {   
    this.getMeasurements();    
  };


  


  render() {
    return (
                        

            <div className="col4">
              <div className="row">

                <div className="col6">
                  <div className="measImg" >
                    <img src={'/assets/images/garments/bodyMeasurements1.gif'} height="600"></img>
                  </div>
                </div>

                <div className="col6">
                  <div className="meas">
                    <Measurements
                      inputBust={this.state.newBust}
                      inputWaist={this.state.newWaist}
                      inputHip={this.state.newHip}
                      inputKnee={this.state.newKnee}
                      inputLeg={this.state.newLeg}
                      inputBP={this.state.newBP}
                      inputBack={this.state.newBack}
                      inputArm={this.state.newArm}

                      changeHandler={this.handleChange}
                      clickUpdate={this.updateMeas}
                      heading='Body Measurements'
                    />
                  </div>
                </div>

              </div>
            </div>       
      

    );
  };
};

export default BodMeas;
