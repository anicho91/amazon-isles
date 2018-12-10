import React from 'react';

const Measurements = props => (
  <div>
    <p className="measTitle">{props.heading}</p>
    <form>
      
      <input name="newBust" className="measInput"  placeholder="1.  Bust" onChange={props.changeHandler} />
      <input name="newWaist" className="measInput" placeholder="2.  Waist" onChange={props.changeHandler} />
      <input name="newHip" className="measInput" placeholder="3.  Hip" onChange={props.changeHandler} />
      <input name="newKnee" className="measInput" placeholder="4.  Waist to Knee" onChange={props.changeHandler} />
      <input name="newLeg" className="measInput" placeholder="5.  Waist to Floor" onChange={props.changeHandler} />
      <input name="newBP" className="measInput" placeholder="6.  Shlder. to Bust Pnt." onChange={props.changeHandler} />
      <input name="newBack" className="measInput" placeholder="7.  Back Length" onChange={props.changeHandler} />
      <input name="newArm" className="measInput" placeholder="8.  Arm Length" onChange={props.changeHandler} />

      
      <button className="measInput"  onClick={props.clickUpdate}>Save Measurements</button>
    </form>
  </div>
)



export default Measurements;