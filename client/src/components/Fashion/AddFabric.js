import React from 'react';


//User can add more fabric selections
  //To moreFabric() in FashionWidget.js
const AddFabric = props => (
  <div className="marTop">
    <label className="center"> <a href="https://www.spoonflower.com/welcome" target="_blank">To add a new fabric, Copy/Paste a Spoonflower URL here</a> </label>
    <form id="addF">
      <input name="addFabric" className="measInput addFab"  placeholder="Spoonflower URL" onChange={props.changeHandler} />
    </form>
    <button class="measInput" onClick={props.clickHandler}>Add Fabric</button>   
    <br></br> 
    <br></br>
  </div>
);

export default AddFabric;