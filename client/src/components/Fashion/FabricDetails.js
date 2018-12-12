import React from 'react';

const Fabric = props => (
  <div key={props.id}>     

    <img src={props.fabricPic} alt="fabric" onClick={props.clickHandler} data-field-name="fabricPic" data-fabric-id={props.id} data-fabric-url={props.fabricUrl} width="100" height="100" />

  </div>
)


export default Fabric;