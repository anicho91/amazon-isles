import React from 'react'

const Measurements = (props) => (
    <div key={props.id} className="measurements">
        <strong>Bust:</strong> {props.bust} inches<br/>
        <strong>Waist:</strong> {props.waist} inches<br/>
        <strong>Hips:</strong> {props.hips} inches<br/>
        <strong>Knee Length:</strong> {props.klength} inches<br/>
        <strong>Leg Length:</strong> {props.llength} inches<br/>
        <strong>Bust to Shoulder:</strong> {props.bplength} inches<br/>
        <strong>Back Length:</strong> {props.blength} inches<br/>
        <strong>Arm Length:</strong> {props.alength} inches<br/>
    </div>
)

export default Measurements