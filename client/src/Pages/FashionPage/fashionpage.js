import React, { Component } from 'react';
import Fabric from '../../components/Fashion/Fabric';
import Garment from '../../components/Fashion/Garment';
import Composite from '../../components/Fashion/Composite';
import Measurements from '../../components/Fashion/Measurements';
import AddFabric from '../../components/Fashion/AddFabric';
import * as $ from 'axios';
import './fashionpage.css';


import StyleHeader from "../../components/Style/styleheader";
import StyleFooter from "../../components/Style/stylefooter";



class App extends Component {

  state = {    
    fabricsList: [],
    garmentsList: [],
    measureList: [],
    fabricPic: "https://s3.amazonaws.com/roostery-composites/compost/922441/fabric-preview-fq_0_m.jpg",
    garmentPic: '/assets/images/garments/shirtButtondown.gif',
    newFabric: '5c0a1a770509757897a3187d',
    newGarment: '5c086f1cc9a15c404465d830',
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
    updateId: '',
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
    measurement: measure})
      .then((result) => {        
        console.log("PUT measurements");
        console.log(result.data);
        this.getMeasurements();
      })
  }

  

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // handleImgClick = (e) => {
  //   const fieldName = e.target.dataset.fieldName;
  //   const newFabricId = e.target.dataset.fabricId;
  //   const newGarmentId = e.target.dataset.garmentId;
  //   console.log("newFabricId", newFabricId)
  //   console.log("newGarmentId", newGarmentId)
  //   // this.patternFill(); 

  //   this.setState({
  //     [fieldName]: e.target.src
  //   });
  //   this.setState({
  //     newFabric: newFabricId
  //   });
  //   this.setState({
  //     newGarment: newGarmentId
  //   });
  // }

  handleGarmentClick = (e) => {
    const fieldName = e.target.dataset.fieldName;
    
    const newGarmentId = e.target.dataset.garmentId;
    
    console.log("newGarmentId", newGarmentId)
    // this.patternFill(); 

    this.setState({
      [fieldName]: e.target.src
    });
   
    this.setState({
      newGarment: newGarmentId
    });
  }

  handleFabricClick = (e) => {
    const fieldName = e.target.dataset.fieldName;
    const newFabricId = e.target.dataset.fabricId;
    
    console.log("newFabricId", newFabricId)
    
    // this.patternFill(); 

    this.setState({
      [fieldName]: e.target.src
    });
    this.setState({
      newFabric: newFabricId
    });
    
  }




  handleSubmit = (event, target) => {
    event.preventDefault();
    // this.setState({ newFabric: event.target.dataset.fabricId })
    // this.setState({ newGarment: event.target.dataset.garmentId })
    // const newFabric = event.target.dataset.fabricId;

    // const newGarment = event.target.dataset.garmentId;
    console.log("this.state.newGarment", this.state.newGarment);
    console.log("this.state.newFabric", this.state.newFabric)
    
    $.post('/api/orders', { budget: 50.15, fabricId: this.state.newFabric,  garmentId: this.state.newGarment, clientId: this.state.clientID })
      .then((result) => {
        console.log(result.data);
      })
  }

  moreFabric = (event, target) => {
    event.preventDefault();
      
    console.log("this.state.addFabric", this.state.addFabric)
    const fabricURL = (`https://s3.amazonaws.com/roostery-composites/compost/${this.state.addFabric}fabric-preview-fq_0_m.jpg`);
    
    $.post('/api/fabrics', { fabric_name: "user selected", fabric_pic: (`https://s3.amazonaws.com/roostery-composites/compost/${this.state.addFabric}/fabric-preview-fq_0_m.jpg`)  })
      .then((result) => {
        console.log(result.data);
        this.getFabrics();
      })
  }

  



  getFabrics = () => {
    console.log("getFabrics")
    $.get('/api/fabrics')
      .then((result) => {
        this.setState({ fabricsList: result.data })
      })
  }

  getGarments = () => {
    console.log("getGarments")
    $.get('/api/garments')
      .then((result) => {
        this.setState({ garmentsList: result.data })
      })
  }

  getMeasurements = () => {
    console.log("getMeasurements")
    $.get(`/api/users/${this.state.clientID}`)
      .then((result) => {
        this.setState({ measureList: result.data.measurement })
        console.log("this.state.measureList", this.state.measureList);
        // this.setState({newBust: this.state.measureList.bust});
          

      })
  }


  componentDidMount() {
    this.getGarments();
    this.getFabrics();
    this.getMeasurements();
    this.patternFill();    
  }

  patternFill() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    

    img.onload = () => {
      const pat = ctx.createPattern(img, "repeat");
      // ctx.drawImage(img, 0, 0)
      ctx.scale(.5, .5);
      ctx.fillStyle=pat;
      ctx.fillRect(0,0,1600,2400)
      // ctx.fill();
      ctx.scale(2,2);
    }    
  };


  render() {
    return (
      <div>
      <div className="content">      
<div className="row">

<div className="col2 details">
<Composite
  key={this.state.newFabric}
  idF={this.state.newFabric}
  idG={this.state.newGarment}         
  clickHandler={this.handleSubmit}
  />
  <AddFabric  
  inputFabNum={this.state.addFabric}
  changeHandler={this.handleChange}
  clickHandler={this.moreFabric}
  />
</div>


<div className="col6">

  <div className="row">

    <div className="col2 fabBox">      
        {this.state.fabricsList.map(fabric => (
            <Fabric
              key={fabric._id}
              id={fabric._id}
              fabricName={fabric.fabric_name}
              fabricPic={fabric.fabric_pic}
              clickHandler={this.handleFabricClick}
            />
        ))}      
    </div>

    <div className="col2 garBox">
      {this.state.garmentsList.map(garment => (
        <Garment
          key={garment._id}
          id={garment._id}
          garmentName={garment.garment_name}
          garmentPic={garment.garment_pic}
          clickHandler={this.handleGarmentClick}  
        />
      ))}
    </div>

    <div className="col8">
          <img ref="mask" src={this.state.garmentPic} className="garment" width={400} height={600} />

          <canvas ref="canvas" className="fabric" width={400} height={600} />

          
    </div>

  </div>
</div>  

  <div className="col4">
    <div className="row">

      <div className="col6">
      <div className="measImg" >        
        <img src={'/assets/images/garments/bodyMeasurements1.gif'}  height="600"></img>
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
 
    </div>       
  </div>
  <img ref="image" src={this.state.fabricPic} className="hideCanvasSource" />  
</div>
    );
  }
}

export default App;
