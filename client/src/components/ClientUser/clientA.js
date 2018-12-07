import React from 'react'

const User = (props) => (
    <div key={props.id} className="address">
        {props.street}<br/>
        {props.city}, {props.state}<br />
        {props.country}<br />

        <button value={props.id} onClick={props.onUpdate} className='updatebtn'>Update</button>
    </div>
)

export default User