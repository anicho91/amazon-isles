import React from 'react'

const Measurements = (props) => (
    console.log(props),
    <div key={props.id} className="measurements"><br/>
        Waist: {props.waist}<br/>
        Hips: {props.hips}<br/>
        Knee Length: {props.klenght}<br/>
        Leg Length: {props.llength}<br/>
        Bust to Shoulder: {props.bplength}<br/>
        Back Length: {props.blength}<br/>
        Arm Length: {props.alength}<br/>
        <button value={props.id} onClick={props.onUpdate2} className='updatebtn'>Update</button>
    </div>
)

export default Measurements