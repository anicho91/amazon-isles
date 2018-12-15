import React from 'react';

//Submits order and sends fabric and garment _id to handleSubmit() in FashionWidget.js
const Composite = props => (
  <div>
    <button class="choose measInput" onClick={props.clickHandler} data-fabric-id={props.fid} data-garment-id={props.gid}>Choose Design</button> 
  </div>
)


export default Composite;