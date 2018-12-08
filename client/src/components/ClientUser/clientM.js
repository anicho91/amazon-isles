import React from 'react'

const Measurements = (props) => (
    console.log(props),
    <div key={props.id} className="measurements">
        {props.waist}
        <button value={props.id} onClick={props.onUpdate2} className='updatebtn'>Update</button>
    </div>
)

export default Measurements