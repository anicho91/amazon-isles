import React, { Component } from "react";
import * as $ from "axios";
import User from "../../components/ClientUser/clientA";
import "./clientpage.css";
import Measurements from "../../components/ClientUser/clientM";
import Pic from "../../components/ClientUser/clientP";
import StyleHeader from "../../components/Style/styleheader";
import StyleFooter from "../../components/Style/stylefooter";
import {setSession, getAccessToken, handleAuthentication, isAuthenticated} from '../../components/Auth/Auth';

class Clientpage extends Component {
  state = {
    image: {
      type: "Profile",
      imagesrc: require("../../components/ClientUser/lily.jpg")
    },
    user: null
  };


  getUser = event => {
    $.get(`api/users/5c09ac8f2567d6637c665d23`).then(results => {
      console.log(results);
      this.setState({ user: results.data });
    });
  };

  componentDidMount() {
    this.getUser();
    handleAuthentication();
    
  }

  update = event => {
    event.preventDefault();
    this.setState({ isUpdating: false });
    $.put(`/api/user/${this.state.updateId}`, {
      content: this.state.noteUpdate
    }).then(() => {
      this.getUser();
    });
  };

  showUpdate = event => {
    this.setState({ isUpdating: true, updateId: event.target.value });
  };

  render() {
    return (
      <div>
        <StyleHeader />

        <div className="userDiv">
          <div className="userImage">
            <Pic image={this.state.image.imagesrc} />
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
                    waist={this.state.user.measurement.weist}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <StyleFooter />
      </div>
    );
  }
}

export default Clientpage;
