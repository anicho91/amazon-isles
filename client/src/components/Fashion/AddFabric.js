import React from 'react';


//User can add more fabric selections
  //To moreFabric() in FashionWidget.js
const AddFabric = props => (
  <div>
    <input name="addFabric" className="measInput addFab"  placeholder="Spoonflower URL" onChange={props.changeHandler} />
    <button class="measInput" onClick={props.clickHandler}>Add Fabric</button>   
    <br></br> 
  </div>
);

export default AddFabric;