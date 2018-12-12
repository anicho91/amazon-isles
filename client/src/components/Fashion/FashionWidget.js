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

  
  handleGarmentClick = (e) => {
    const fieldName = e.target.dataset.fieldName;
    const newGarmentId = e.target.dataset.garmentId;   const garmentLengthClick = e.target.dataset.garmentLen; 
    const garmentNameClick = e.target.dataset.garmentName;
console.log("newGarmentId", newGarmentId)    

    this.setState({
      [fieldName]: e.target.src
    });
    this.setState({
      newGarment: newGarmentId
    });
    this.setState({
      garName: garmentNameClick
    });
    this.setState({
      garLength: garmentLengthClick
    });
  };

//dataset automatically takes names like fabric_id and converts to fabricId since _ name not allowed in objects//
  handleFabricClick = (e) => {
    const fieldName = e.target.dataset.fieldName;
    const newFabricId = e.target.dataset.fabricId;
    const fabricLinkclick = e.target.dataset.fabricUrl;
    const fabricNameclick = e.target.dataset.fabricName;
    const fabricDesignerclick = e.target.dataset.fabricDesigner;

// console.log("fieldName", fieldName);
console.log("newFabricId", newFabricId);
console.log("fabricLinkclick", fabricLinkclick);

    this.setState({
      [fieldName]: e.target.src
    });
    this.setState({
      newFabric: newFabricId
    });
    this.setState({
      fabricLink: fabricLinkclick
    });
    this.setState({
      fabricName: fabricNameclick
    });
    this.setState({
      fabricDesigner: fabricDesignerclick
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


// const fabFabric = "https://www.spoonflower.com/fabric/4525-maidenhair-yellow-by-anntuck"
const fabNumOb = /([0-9])\w+/.exec(this.state.addFabric);
const fabDesignerOb = /(?<=\-by-)(.*)(?=iref)/g.exec(this.state.addFabric);
// const fabNameOb = /(?<=\-)(.*)/g.exec(this.state.addFabric);
const fabNameOb = /(?<=\-)(.*)(?=-by)/g.exec(this.state.addFabric);
console.log("fabNumOb[0]", fabNumOb[0]);
console.log("fabDesignerOb", fabDesignerOb);
console.log("fabNameOb[0]", fabNameOb[0]);
const fabNum = fabNumOb[0];
// const fabDesigner = fabDesignerOb[0];
const fabName = fabNameOb[0];

    $.post('/api/fabrics', { fabric_url: this.state.addFabric, fabric_pic: (`https://s3.amazonaws.com/roostery-composites/compost/${fabNum}/fabric-preview-fq_0_m.jpg`), 
    fabric_name: fabName
     })
      .then((result) => {
console.log(result.data);
        this.getFabrics();
      });
  };

  // (`https://s3.amazonaws.com/roostery-composites/compost/${fabNum}/fabric-preview-fq_0_m.jpg`), 
  // fabric_name: fabName, fabric_designer: fabDesigner
  //  })



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
      ctx.scale(.33333, .3333333);
      ctx.fillStyle = pat;
      ctx.fillRect(0, 0, 1600, 2400);
      ctx.scale(3, 3);
    };
  };



  render() {
    return (

       
      

       <div className="fashionwidge">


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
                    
              <ul className="detList">
              <li> <a href={this.state.fabricLink}>Fabric Details:</a></li>
                <li>Name: {this.state.fabricName}</li>
                {/* <li>Designer: {this.state.fabricDesigner}</li> */}
              </ul>
              <br></br>              
              <ul className="detList">
                <li>Garment Details:</li>
                <li>{this.state.garName}</li>
                <li>Yardage: {this.state.garLength} </li>
              </ul>
              



            </div>


            <div className="col6">

              <div className="row">

                <div className="col2 fabBox box2">
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

                <div className="col2 garBox box3">
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
