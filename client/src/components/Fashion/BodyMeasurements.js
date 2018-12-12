import React, { Component } from 'react';
import Measurements from './Measurements';
import * as $ from 'axios';
// import './fashionpage.css';
import '../../Pages/FashionPage/fashionpage.css';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Button
} from 'reactstrap';





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
    clientID: "5c0dd73242d9c31a00e69e31",
    providerList: []
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
        //this.setState({ measureList: result.data.measurement })
        console.log("this.state.measureList", this.state.measureList);
      });
  };

  clickHandler = (event) => {
    $.get('/api/users')
      .then((userData) => {
        console.log(userData);
        const providers = userData.data.filter((elem) => elem.category.includes("provider"))
        this.setState({ providerList: providers })
        console.log('I am result', providers)

      })
      .catch((error) => {
        console.log(error);
      })

  }




  componentDidMount() {
    this.getMeasurements();
  };





  render() {
    return (



      <div>


        <div className="measImg" >
          <img src={'/assets/images/garments/bodyMeasurements1.gif'} height="600"></img>
        </div>

        <div className="meas">
          <Measurements
            inputBust={this.state.measureList.bust}
            inputWaist={this.state.measureList.waist}
            inputHip={this.state.measureList.hips}
            inputKnee={this.state.measureList.knee_length}
            inputLeg={this.state.measureList.leg_length}
            inputBP={this.state.measureList.bp_length}
            inputBack={this.state.measureList.back_length}
            inputArm={this.state.measureList.arm_length}

            changeHandler={this.handleChange}
            clickUpdate={this.updateMeas}
            heading='Body Measurements'
          />
          <button onClick={this.clickHandler} className="float-right">Display Available Provider</button>
          <div>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        </div>



      </div>


    );
  };
};

export default BodMeas;
