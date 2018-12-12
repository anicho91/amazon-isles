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
    flag: true,
    token: '',
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
    orders: [],
    orderList: []
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
      // console.log(results);
      this.setState({ user: results.data });
      this.setState({ orders: results.data.orders })
    });
  }

  getOrder = event => {
    $.get(`/api/orders/5c0ec3efbb109e4a103a2009`)
      .then(results => {
        this.setState({ orderList: results.data})
      })
  }

  componentDidMount(){
    this.getUser()
    this.getOrder()
  }

  // getTest = event => {
  //   $.get(`/api/test/${this.state.token}`)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  // async componentDidMount() {
  //   // this.getUser();
  //   //let token = "";
  //   if (getIdToken()) {
  //     let idToken = await getIdToken();
  //     let info = await jwt_decode(idToken);
  //     this.setState({
  //       token: info.sub,
  //       name: info.given_name
  //     })
  //   } else {
  //     handleAuthentication();
  //   }
  //   $.post('/api/session', {
  //     token: this.state.token
  //   }).then((response) => {
  //     console.log('sucess');
  //     console.log('session data', response);
  //     const flag = false;
  //     const sessionData = response.data;
  //     sessionData.map((sData) => {
  //       if (sData.token == this.state.token) {
  //         this.setState({ flag: false });
  //       }
  //     })
  //     console.log('verify', localStorage.getItem('token'))
  //     if (this.state.flag) {
  //       $.post('/api/test', {
  //         token: this.state.token,
  //         category: "client"
  //       }).then((response) => {
  //         console.log(response);
  //         this.getTest();
  //       })
  //     }
  //   })

    // $.post('/api/test', {
    //   token: token,
    //   category:'client'
    //   }).then((data) => {
    //   console.log('user posted',data)

    //   } )

  // }


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
            <button value={this.state.id} onClick={this.state.onUpdate3} className='updatebtn2'>Upload</button>
          </div>
          <div className="userInfo">
          <div className="addressinfo">
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
              <button value={this.state.id} onClick={this.state.onUpdate} className='updatebtn'>Update</button>
            </div>
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
                <button value={this.state.id} onClick={this.state.onUpdate2} className='updatebtn'>Update</button>
              </div>
            </div>
            <div className='orders'>
            
              {this.state.orderList.map((data => (
                console.log(data),

                <Orders 
                  key={data._id}
                  id={data._id}
                  fname={data.fabric.fabric_name}
                  fpic={data.fabric.fabric_pic}
                  gname={data.garment.garment_name}
                  gpic={data.garment.garment_pic}
                />
              )))}
            
            </div>
          </div>
        </div>
        <StyleFooter />
      </div>
    );
  }
}

export default Clientpage;
