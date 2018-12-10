import React from 'react';

const Garment = props => (
  <div key={props.id}>      

    <img src={`/assets/images/garments/${props.garmentPic}`} className="garmThumb" alt="garment" onClick={props.clickHandler} data-field-name="garmentPic" data-garment-id={props.id} width="100" height="150" />
    
  </div>
)





export default Garment;