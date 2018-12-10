import React from 'react'

const Orders = (props) => (
    <div key={props.id} className="userorders">
        {props.orders}
    </div>
)

export default Orders