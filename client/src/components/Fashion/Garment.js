import React from 'react';

//Displays garment image scroll menu, and grabs image name, _id, name, and yardage of the garment clicked.        //Used by handleGarmentClick() in fashionWidget.js
const Garment = props => (
  <div key={props.id}>      

    <img src={`/assets/images/garments/${props.garmentPic}`} className="garmThumb" alt="garment" onClick={props.clickHandler} data-field-name="garmentPic" data-garment-id={props.id} data-garment-len={props.garmentLength} data-garment-name={props.garmentName} width="100" height="150" />
    
  </div>
)





export default Garment;