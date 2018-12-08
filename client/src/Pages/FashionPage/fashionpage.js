import React, { Component } from 'react';
import Fabric from '../../components/Fashion/Fabric';
import Garment from '../../components/Fashion/Garment';
import Composite from '../../components/Fashion/Composite';

import * as $ from 'axios';
import './fashionpage.css';


import StyleHeader from "../../components/Style/styleheader";
import StyleFooter from "../../components/Style/stylefooter";



class App extends Component {

  state = {    
    fabricsList: [],
    garmentsList: [],
    fabricPic: "https://s3.amazonaws.com/roostery-composites/compost/985798/fabric-preview-fq_0_m.jpg",
    garmentPic: '/assets/images/garments/shirtButtondown.gif',  
    newFabric: '',
    newGarment: ''
  }

  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleImgClick = (e) => {
    const fieldName = e.target.dataset.fieldName;
    const newFabricId = e.target.dataset.fabricId;
    console.log("newFabricId", newFabricId)
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
    const newGarment = event.target.dataset.garmentId;
    console.log("newGarment", newGarment);
    console.log("this.state.newFabric", this.state.newFabric)
    
    $.post('/api/orders', { budget: 5.15, fabricId: this.state.newFabric })
      .then((result) => {
        console.log(result.data);
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


  componentDidMount() {
    this.getGarments();
    this.getFabrics();

    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
    }    
  }



  render() {
    return (
      <div>      

        
        <div className="designBox">
        <div className="selBox">
          <img ref="mask" src={this.state.garmentPic} className="garment" width={400} height={600} />

          <canvas ref="canvas" className="fabric" width={400} height={600} />

          <img ref="image" src={this.state.fabricPic} className="hideCanvasSource" />            

        </div>

        <div>
        <Composite
          key={this.state.newFabric}
          idF={this.state.newFabric}
          idG={this.state.newGarment}         
          clickHandler={this.handleSubmit}
          />
        </div>

        <div class="fabBox">
          {this.state.fabricsList.map(fabric => (

            <Fabric
              key={fabric._id}
              id={fabric._id}
              fabricName={fabric.fabric_name}
              fabricPic={fabric.fabric_pic}
              clickHandler={this.handleImgClick}
            />

          ))}
        </div>
        <div class="garBox">
          {this.state.garmentsList.map(garment => (

            <Garment
              key={garment._id}
              id={garment._id}
              garmentName={garment.garment_name}
              garmentPic={garment.garment_pic}
              clickHandler={this.handleImgClick}
              
            />

          ))}
        </div>
        </div>
      </div>
    );
  }
}

export default App;
