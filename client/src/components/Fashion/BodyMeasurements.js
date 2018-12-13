import React, { Component } from 'react';
import Measurements from './Measurements';
import * as $ from 'axios';

// import './fashionpage.css';
import '../../Pages/FashionPage/fashionpage.css'
import { setSession, getIdToken, handleAuthentication, isAuthenticated } from '../../components/Auth/Auth';
import jwt_decode from 'jwt-decode';







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

    token: '',
    name: '',
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
    $.get(`/api/users/${this.state.token}`)
      .then((result) => {
        console.log("result",result);
        this.setState({ measureList: result.data.measurement })
console.log("this.state.measureList", this.state.measureList);

  
      });
  };

  initiateSession = () => {
    let idToken = getIdToken();
    let info = jwt_decode(idToken);
    console.log('I am info', info)
    localStorage.setItem("token", info.sub);
    localStorage.setItem("name", info.nickname);
    this.setState({
      token: info.sub,
      name: info.given_name
    })
  }


  componentDidMount() {
    
    let token = "";

    if (getIdToken()) {
      this.initiateSession();
    } else {
      setSession();
      this.initiateSession();
    }

    this.setState({
      token: localStorage.getItem('token'),
      name: localStorage.getItem('name')
    });
    

    console.log("auth_stuff", localStorage.getItem("token"));
    $.post('/api/session', {
      token: localStorage.getItem('token')
      
    }).then((response) => {
      console.log('success');
      console.log('session data', response);
      console.log("local storage", localStorage.getItem('token'));
      
      console.log(this.state.token)
      const flag = false;
      const sessionData = response.data;
      console.log("auth_stuff", sessionData, 'verify', localStorage.getItem('token'))
      if (sessionData === null) {
        $.post('/api/users', {
          token: this.state.token,
          userId: this.state.name,
          category: "client"
        }).then((response) => {
          console.log("users", response);
          
        })
      }
      
      this.getMeasurements();  
    });


    
  }




  render() {
    return (

                        

            
              <div className="fashionRow itemContainer">

               
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
                  </div>     
        
              </div>
      




 


    );
  };
};

export default BodMeas;
