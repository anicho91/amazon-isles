import React from 'react';

const Composite = props => (
  <div>
    <button class="choose measInput" onClick={props.clickHandler} data-fabric-id={props.fid} data-garment-id={props.gid}>Order Design</button> 
  </div>
)





export default Composite;