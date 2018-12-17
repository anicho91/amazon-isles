import React from 'react';


//User can add more fabric selections
  //To moreFabric() in FashionWidget.js
const AddFabric = props => (
  <div>
    <label className="center">To add a new fabric, Copy/Paste a <a href="https://www.spoonflower.com/welcome" target="_blank"><h6>Spoonflower</h6></a> URL here</label>
    <form id="addF">
      <input name="addFabric" className="measInput addFab"  placeholder="Spoonflower URL" onChange={props.changeHandler} />
    </form>
    <button class="measInput" onClick={props.clickHandler}>Add Fabric</button>   
    <br></br> 
    <br></br>
  </div>
);

export default AddFabric;