import React from 'react';

const Garment = props => (
  <div key={props.id}>      

    <img src={`/assets/images/garments/${props.garmentPic}`} alt="garment" onClick={props.clickHandler} data-field-name="garmentPic" width="100" height="150" />
    
  </div>
)





export default Garment;