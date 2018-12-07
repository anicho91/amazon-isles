import React from 'react'

const Pic = (props) => (
    <div key={props.id} className="userImage">
        {/* {props.image}<br/> */}
        <img src={props.image} className='image' alt='test holder' />
        <button value={props.id} onClick={props.onUpdate3} className='updatebtn'>Upload</button>
    </div>
)

export default Pic