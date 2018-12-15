import React from 'react';

const AddFabric = props => (
  <div>
    <input name="addFabric" className="measInput addFab"  placeholder="Fabric URL" onChange={props.changeHandler} />
    <button class="measInput" onClick={props.clickHandler}>Add Fabric</button>   
    <br></br> 

  </div>
)





export default AddFabric;