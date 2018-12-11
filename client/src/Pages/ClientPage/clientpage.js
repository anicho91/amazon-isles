import React, { Component } from "react";
import * as $ from "axios";
import User from "../../components/ClientUser/clientA";
import "./clientpage.css";
import Measurements from "../../components/ClientUser/clientM";
import Pic from "../../components/ClientUser/clientP";
import Orders from '../../components/ClientUser/clientO';
import StyleHeader2 from "../../components/Style/styleheader2";
import StyleFooter from "../../components/Style/stylefooter";
import { setSession, getIdToken, handleAuthentication, isAuthenticated } from '../../components/Auth/Auth';
import jwt_decode from 'jwt-decode';

class Clientpage extends Component {
  state = {
    image: {
      type: "Profile",
      imagesrc: ''
    },
    user: null,
    name: '',
    flag: true,
    token: ''
  };


  getUser = event => {
    $.get(`api/users/5c0e89c9f571a32c2022fddb`).then(results => {
      // console.log(results);
      this.setState({ user: results.data });
    });
  };

  getTest = event => {
    $.get(`/api/test/${this.state.token}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  async componentDidMount() {
    // this.getUser();
    //let token = "";
    if (getIdToken()) {
      let idToken = await getIdToken();
      let info = await jwt_decode(idToken);
      this.setState({
        token: info.sub,
        name: info.given_name
      })
    } else {
      handleAuthentication();
    }
    $.post('/api/session', {
      token: this.state.token
    }).then((response) => {
      console.log('sucess');
      console.log('session data', response);
      const flag = false;
      const sessionData = response.data;
      sessionData.map((sData) => {
        if (sData.token == this.state.token) {
          this.setState({ flag: false });
        }
      })
      console.log('verify', localStorage.getItem('token'))
      if (this.state.flag) {
        $.post('/api/test', {
          token: this.state.token,
          category: "client"
        }).then((response) => {
          console.log(response);
          this.getTest();
        })
      }
    })

    // $.post('/api/test', {
    //   token: token,
    //   category:'client'
    //   }).then((data) => {
    //   console.log('user posted',data)

    //   } )

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