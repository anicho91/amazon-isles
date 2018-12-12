import React from 'react';

const Measurements = props => (
  <div>
    <p className="measTitle">{props.heading}</p>
    <form>
      
      <input name="newBust" className="measInput"  placeholder={`1. Bust= ${props.inputBust}`} onChange={props.changeHandler} />
      <input name="newWaist" className="measInput" placeholder={`2. Waist= ${props.inputWaist}`} onChange={props.changeHandler} />
      <input name="newHip" className="measInput" placeholder={`3. Hip= ${props.inputHip}`} onChange={props.changeHandler} />
      <input name="newKnee" className="measInput" placeholder={`4. Waist to Knee= ${props.inputKnee}`} onChange={props.changeHandler} />
      <input name="newLeg" className="measInput" placeholder={`5. Waist to Floor= ${props.inputLeg}`} onChange={props.changeHandler} />
      <input name="newBP" className="measInput" placeholder={`6. Shoulder to BP= ${props.inputBP}`} onChange={props.changeHandler} />
      <input name="newBack" className="measInput" placeholder={`7. Back Length= ${props.inputBack}`} onChange={props.changeHandler} />
      <input name="newArm" className="measInput" placeholder={`8. Arm Length= ${props.inputArm}`} onChange={props.changeHandler} />

      
      <button className="measInput"  onClick={props.clickUpdate}>Save Measurements</button>
    </form>
  </div>
)



export default Measurements;