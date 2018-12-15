import React, { Component } from 'react';
import Fabric from './Fabric';
import Garment from './Garment';
import Composite from './Composite';
import AddFabric from './AddFabric';
import * as $ from 'axios';
import '../../Pages/FashionPage/fashionpage.css'



//Ann Tuck's Fashion Widget//
class FabWidget extends Component {

  state = {
    fabricsList: [],
    garmentsList: [],
    fabricPic: "https://s3.amazonaws.com/roostery-composites/compost/922441/fabric-preview-fq_0_m.jpg",
    garmentPic: '/assets/images/garments/shirtButtondown.gif',
    newFabric: '5c0a1a770509757897a3187d',
    newGarment: '5c086f1cc9a15c404465d830',
    addFabric: '',
    fabNum: '',
    fabricName: 'Nasturtiums Fresh',
    fabricDesigner: '',
    fabricLink: 'https://www.spoonflower.com/fabric/922441-nasturtiums-fresh-by-anntuck',
    garName: 'Shirt Buttondown',
    garLength: '2.5',
    isUpdating: false,
    clientID: "5c0dd73242d9c31a00e69e31"
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

//When garment images are clicked in the scroll menu, image name, _id, name, and yardage of the clicked item are collected.  Comes from Garment.js component.
  //dataset.garmentId is equivalent to data-garment-id in Garment.js component.  The hyphen is replaced with camelCase.
  handleGarmentClick = (e) => {
    const fieldName = e.target.dataset.fieldName;

      this.setState({
      [fieldName]: e.target.src,
      newGarment: e.target.dataset.garmentId,
      garName: e.target.dataset.garmentName,
      garLength: e.target.dataset.garmentLen
    });
    }; 
    

//When fabric images are clicked in the scroll menu, image name, _id, name, and yardage of the clicked item are collected.  Comes from Fabric.js component.
  //dataset.fabricId is equivalent to data-fabric-id in Fabric.js component.  The hyphen is replaced with camelCase.
  handleFabricClick = (e) => {
    const fieldName = e.target.dataset.fieldName;

      this.setState({
      [fieldName]: e.target.src,
      newFabric: e.target.dataset.fabricId,
      fabricLink: e.target.dataset.fabricUrl,
      fabricName: e.target.dataset.fabricName
    });    
  };


//When order is submitted, _id of fabric and garment are POSTed to database.  From Composite.js component
  handleSubmit = (event, target) => {
    event.preventDefault();
console.log("this.state.newGarment", this.state.newGarment);
console.log("this.state.newFabric", this.state.newFabric)

    $.post('/api/orders', { budget: 50.15, fabricId: this.state.newFabric, garmentId: this.state.newGarment, clientId: this.state.clientID })
      .then((result) => {
console.log(result.data);
      });
  };


//Users can add more fabric selections.
  //From AddFabric.js component
  moreFabric = (event, target) => {
    event.preventDefault();
console.log("this.state.addFabric",this.state.addFabric)


    //Regular expressions grab name and number of fabric from url.  Image url is created from the fabric number.

    //For Spoonflower url's
    const fabNumOb = /([0-9])\w+/.exec(this.state.addFabric);    
    const fabNameOb = /(?<=\-)(.*)(?=-by)/g.exec(this.state.addFabric);
    
    const fabNum = fabNumOb[0];   
    const fabName = fabNameOb[0];

    $.post('/api/fabrics', {
      fabric_url: this.state.addFabric, fabric_pic: (`https://s3.amazonaws.com/roostery-composites/compost/${fabNum}/fabric-preview-fq_0_m.jpg`),
      fabric_name: fabName
    })
      .then((result) => {
        this.getFabrics();
      });
  };

  
//Get fabrics from the database to render to the scroll menu.
  getFabrics = () => {
    
    $.get('/api/fabrics')
      .then((result) => {
        this.setState({ fabricsList: result.data })
      });
  };


//Get garments from the database to render to the scroll menu.
  getGarments = () => {
   
    $.get('/api/garments')
      .then((result) => {
        this.setState({ garmentsList: result.data })
      });
  };


  componentDidMount() {
    this.getGarments();
    this.getFabrics();
    this.patternFill();
  };


//For rendering the fabric on the canvas in a pattern fill.  
  patternFill() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      const pat = ctx.createPattern(img, "repeat");
      ctx.scale(.33333, .3333333);
      ctx.fillStyle = pat;
      ctx.fillRect(0, 0, 1600, 2400);
      ctx.scale(3, 3);
    };
  };



  render() {
    return (

      <div className="fashionRow itemContainer" >


        <div className="col2 details box1">
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

          <ul className="detList center">
            <li> <a href={this.state.fabricLink}><h6>Fabric Details:</h6></a></li>
            <li>{this.state.fabricName}</li>            
          </ul>
          <br></br>
          <ul className="detList center">
            <li><h6>Garment Details:</h6></li>
            <li>{this.state.garName}</li>
            <li>Yardage: {this.state.garLength} </li>
          </ul>

        </div>


        <div className="row widget heightLimit">

          {/* Fabric scroll selector */}
          <div className="fabBox">
            {this.state.fabricsList.map(fabric => (
              <Fabric
                key={fabric._id}
                id={fabric._id}
                fabName={fabric.fabric_name}
                fabricPic={fabric.fabric_pic}
                fabUrl={fabric.fabric_url}
                fabDesigner={fabric.fabric_designer}
                clickHandler={this.handleFabricClick}
              />
            ))}
          </div>

          {/* Garment scroll selector */}
          <div className="garBox">
            {this.state.garmentsList.map(garment => (
              <Garment
                key={garment._id}
                id={garment._id}
                garmentName={garment.garment_name}
                garmentPic={garment.garment_pic}
                garmentLength={garment.garment_length}
                clickHandler={this.handleGarmentClick}
              />
            ))}
          </div>

          {/* Fabric displayed on garment */}
          <div className="combo heightLimit">
            <img ref="mask" src={this.state.garmentPic} className="garment" width={400} height={600} />

            <canvas ref="canvas" className="fabric" width={400} height={600} />

            {/* Hidden fabric image source for canvas */}
            <img ref="image" src={this.state.fabricPic} className="hideCanvasSource" />
          </div>

        </div>


      </div>


    )
  };
};

export default FabWidget;
