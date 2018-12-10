import React, { Component } from 'react';
// import Fabric from '../../components/Fashion/Fabric';
// import Garment from '../../components/Fashion/Garment';
// import Composite from '../../components/Fashion/Composite';
// import Measurements from '../../components/Fashion/Measurements';
// import AddFabric from '../../components/Fashion/AddFabric';
import BodMeas from '../../components/Fashion/BodyMeasurements';
import FabWidget from '../../components/Fashion/FashionWidget';
import StyleHeader from "../../components/Style/styleheader";
import StyleFooter from "../../components/Style/stylefooter";

// import * as $ from 'axios';
import './fashionpage.css';







class App extends Component {

  state = {
    // fabricsList: [],
    // garmentsList: [],
    // measureList: [],
    // fabricPic: "https://s3.amazonaws.com/roostery-composites/compost/922441/fabric-preview-fq_0_m.jpg",
    // garmentPic: '/assets/images/garments/shirtButtondown.gif',
    // newFabric: '5c0a1a770509757897a3187d',
    // newGarment: '5c086f1cc9a15c404465d830',
    // addFabric: '',
    // newBust: '',
    // newWaist: '',
    // newHip: '',
    // newKnee: '',
    // newLeg: '',
    // newBP: '',
    // newBack: '',
    // newArm: '',
    // isUpdating: false,    
    clientID: "5c0dd73242d9c31a00e69e31"
  }


//   updateMeas = (event) => {
//     event.preventDefault();
//     this.setState({ isUpdating: false })
//     const measure = {
//       bust: this.state.newBust,
//       waist: this.state.newWaist,
//       hips: this.state.newHip,
//       knee_length: this.state.newKnee,
//       leg_length: this.state.newLeg,
//       bp_length: this.state.newBP,
//       back_length: this.state.newBack,
//       arm_length: this.state.newArm
//     };
// console.log("measure", measure);
//     $.put(`/api/clients/${this.state.clientID}`, {
//       measurement: measure
//     })
//       .then((result) => {
// console.log("PUT measurements");
// console.log(result.data);
//         this.getMeasurements();
//       });
//   };


  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value })
  // };

  
//   handleGarmentClick = (e) => {
//     const fieldName = e.target.dataset.fieldName;
//     const newGarmentId = e.target.dataset.garmentId;    
// console.log("newGarmentId", newGarmentId)    

//     this.setState({
//       [fieldName]: e.target.src
//     });
//     this.setState({
//       newGarment: newGarmentId
//     });
//   };


//   handleFabricClick = (e) => {
//     const fieldName = e.target.dataset.fieldName;
//     const newFabricId = e.target.dataset.fabricId;
// console.log("newFabricId", newFabricId)

//     this.setState({
//       [fieldName]: e.target.src
//     });
//     this.setState({
//       newFabric: newFabricId
//     });
//   };


//   handleSubmit = (event, target) => {
//     event.preventDefault();
// console.log("this.state.newGarment", this.state.newGarment);
// console.log("this.state.newFabric", this.state.newFabric)

//     $.post('/api/orders', { budget: 50.15, fabricId: this.state.newFabric, garmentId: this.state.newGarment, clientId: this.state.clientID })
//       .then((result) => {
// console.log(result.data);
//       });
//   };


//   moreFabric = (event, target) => {
//     event.preventDefault();
// console.log("this.state.addFabric", this.state.addFabric)
    
//     $.post('/api/fabrics', { fabric_name: "user selected", fabric_pic: (`https://s3.amazonaws.com/roostery-composites/compost/${this.state.addFabric}/fabric-preview-fq_0_m.jpg`), fabric_url: (`https://s3.amazonaws.com/roostery-composites/compost/${this.state.addFabric}/fabric-preview-fq_0_m.jpg`) })
//       .then((result) => {
// console.log(result.data);
//         this.getFabrics();
//       });
//   };


//   getFabrics = () => {
// console.log("getFabrics")
//     $.get('/api/fabrics')
//       .then((result) => {
//         this.setState({ fabricsList: result.data })
//       });
//   };


//   getGarments = () => {
// console.log("getGarments")
//     $.get('/api/garments')
//       .then((result) => {
//         this.setState({ garmentsList: result.data })
//       });
//   };


//   getMeasurements = () => {
// console.log("getMeasurements")
//     $.get(`/api/users/${this.state.clientID}`)
//       .then((result) => {
//         this.setState({ measureList: result.data.measurement })
// console.log("this.state.measureList", this.state.measureList);
//       });
//   };


  // componentDidMount() {
  //   this.getGarments();
  //   this.getFabrics();
  //   // this.getMeasurements();
  //   this.patternFill();
  // };


  // patternFill() {
  //   const canvas = this.refs.canvas;
  //   const ctx = canvas.getContext("2d");
  //   const img = this.refs.image;

  //   img.onload = () => {
  //     const pat = ctx.createPattern(img, "repeat");      
  //     ctx.scale(.5, .5);
  //     ctx.fillStyle = pat;
  //     ctx.fillRect(0, 0, 1600, 2400);
  //     ctx.scale(2, 2);
  //   };
  // };



  render() {
    return (
      <div>
        <StyleHeader />
        <div className="content">
          <div className="row">

            <FabWidget/> 
            <BodMeas/>                  

          </div>
        </div>        
        <StyleFooter />
      </div>
    );
  };
};

export default App;
