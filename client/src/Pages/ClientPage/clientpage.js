import React, { Component } from "react";
import * as $ from "axios";
import User from "../../components/ClientUser/clientA";
import "./clientpage.css";
import Measurements from "../../components/ClientUser/clientM";
import Pic from "../../components/ClientUser/clientP";
import Orders from '../../components/ClientUser/clientO';
import StyleHeader2 from "../../components/Style/styleheader2";
import StyleFooter from "../../components/Style/stylefooter";
import {setSession, getAccessToken, handleAuthentication, isAuthenticated} from '../../components/Auth/Auth';

class Clientpage extends Component {
  state = {
    image: {
      type: "Profile",
      imagesrc: ''
    },
    user: null,
    name: 'Lily',
    modal: false,
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "",
    profile_picture:"",
    bust: '',
    waist: '',
    hips: '',
    knee_length: '',
    leg_length: '',
    bp_length: '',
    back_length: '',
    arm_length: '',
    orderArray: []
  };

  toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
}

//   clickHandler = (event) => {

//     event.preventDefault();

//     const newUser = {
//         phone: this.state.phone,
//         street: this.state.street,
//         city: this.state.city,
//         state: this.state.state,
//         country: this.state.country,
//         profile_picture: this.state.profile_picture
//     };

//     const newClient = {
//         budget: this.state.budget,
//         job_category: this.state.job_category,
//         availability: this.state.availability,
//         demo: this.state.demoList
//     };

//     $.put(`/api/users/${this.state.providerID}`, newUser)
//         .then((updatedData) => {
//             $.put(`/api/providers/${this.state.providerID}`, newProvider)
//                 .then((updatedProvider) => {
//                     this.toggle();
//                     this.props.getProvider();
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })

//         })
//         .catch((error) => {
//             console.log(error);
//         });


// }

  getUser = event => {
    $.get(`api/users/5c0e89c9f571a32c2022fddb`).then(results => {
      console.log(results);
      this.setState({ user: results.data });
    });
  };

  componentDidMount() {
    this.getUser();
    handleAuthentication();
    
  }


  render() {
    return (
      <div>
        <StyleHeader2 />
        <div className='welcome'>Welcome {this.state.name}!</div>
        <div className="userDiv">
        
          <div className="userImage">
          {this.state.user && (
            <Pic image={this.state.user.profile_picture} />
            )}
          </div>
          <div className="userInfo">
            <div className="infoTitle">Address</div>
            <div className="userDBinfo">
              {this.state.user && (
                <User
                  key={this.state.user._id}
                  id={this.state.user._id}
                  street={this.state.user.street}
                  city={this.state.user.city}
                  state={this.state.user.state}
                  country={this.state.user.country}
                />
              )}
            </div>
            <br />
            <div className="measurements">
              <span className="measTitle">Measurements</span>
              <br />
              <div className="measInfo">
                {this.state.user && (
                  <Measurements
                    key={this.state.user._id}
                    id={this.state.user._id}
                    waist={this.state.user.measurement.waist}
                    hips={this.state.user.measurement.hips}
                    klength={this.state.user.measurement.knee_length}
                    llength={this.state.user.measurement.leg_length}
                    bplength={this.state.user.measurement.bp_length}
                    blength={this.state.user.measurement.back_length}
                    alength={this.state.user.measurement.arm_length}
                  />
                )}
              </div>
            </div>
            <div className='orders'>
                  {this.state.user && (
                    <Orders 

                    />
                  )}
            </div>
          </div>
        </div>
        <StyleFooter />
      </div>
    );
  }
}

export default Clientpage;
