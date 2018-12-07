import React from 'react'

const User = (props) => (
    <div key={props.id} className="address">
        {props.street}<br/>
        {props.city}, {props.state}<br />
        {props.country}
    </div>
)

export default User