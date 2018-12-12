import React from 'react'

const Pic = (props) => (
    <div key={props.id} className="userImage">
        <img src={props.image} className='image' alt='test holder' />
    </div>
)

export default Pic