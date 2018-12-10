import React, { Component } from 'react';
import Fabric from './Fabric';
import Garment from './Garment';
import Composite from './Composite';
import AddFabric from './AddFabric';
import * as $ from 'axios';
import '../../Pages/FashionPage/fashionpage.css'



class FabWidget extends Component {

  state = {
    fabricsList: [],
    garmentsList: [],
    fabricPic: "https://s3.amazonaws.com/roostery-composites/compost/922441/fabric-preview-fq_0_m.jpg",
    garmentPic: '/assets/images/garments/shirtButtondown.gif',
    newFabric: '5c0a1a770509757897a3187d',
    newGarment: '5c086f1cc9a15c404465d830',
    addFabric: '',    
    isUpdating: false,    
    clientID: "5c0dd73242d9c31a00e69e31"
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  
  handleGarmentClick = (e) => {
    const fieldName = e.target.dataset.fieldName;
    const newGarmentId = e.target.dataset.garmentId;    
console.log("newGarmentId", newGarmentId)    

    this.setState({
      [fieldName]: e.target.src
    });
    this.setState({
      newGarment: newGarmentId
    });
  };


  handleFabricClick = (e) => {
    const fieldName = e.target.dataset.fieldName;
    const newFabricId = e.target.dataset.fabricId;
console.log("newFabricId", newFabricId)

    this.setState({
      [fieldName]: e.target.src
    });
    this.setState({
      newFabric: newFabricId
    });
  };


  handleSubmit = (event, target) => {
    event.preventDefault();
console.log("this.state.newGarment", this.state.newGarment);
console.log("this.state.newFabric", this.state.newFabric)

    $.post('/api/orders', { budget: 50.15, fabricId: this.state.newFabric, garmentId: this.state.newGarment, clientId: this.state.clientID })
      .then((result) => {
console.log(result.data);
      });
  };


  moreFabric = (event, target) => {
    event.preventDefault();
console.log("this.state.addFabric", this.state.addFabric)
    
    $.post('/api/fabrics', { fabric_name: "user selected", fabric_pic: (`https://s3.amazonaws.com/roostery-composites/compost/${this.state.addFabric}/fabric-preview-fq_0_m.jpg`), fabric_url: (`https://s3.amazonaws.com/roostery-composites/compost/${this.state.addFabric}/fabric-preview-fq_0_m.jpg`) })
      .then((result) => {
console.log(result.data);
        this.getFabrics();
      });
  };


  getFabrics = () => {
console.log("getFabrics")
    $.get('/api/fabrics')
      .then((result) => {
        this.setState({ fabricsList: result.data })
      });
  };


  getGarments = () => {
console.log("getGarments")
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


  patternFill() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      const pat = ctx.createPattern(img, "repeat");      
      ctx.scale(.5, .5);
      ctx.fillStyle = pat;
      ctx.fillRect(0, 0, 1600, 2400);
      ctx.scale(2, 2);
    };
  };



  render() {
    return (
       <div>

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

                  <img ref="image" src={this.state.fabricPic} className="hideCanvasSource" />  
                </div>

              </div>
            </div>              
         
        
             
            </div>
    )
  };
};

export default FabWidget;
