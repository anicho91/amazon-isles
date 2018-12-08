import React from 'react';

const Composite = props => (
  <div>
    <button class="choose" onClick={props.clickHandler} data-fabric-id={props.fid} data-garment-id={props.gid}>Choose</button> 
  </div>
)





export default Composite;