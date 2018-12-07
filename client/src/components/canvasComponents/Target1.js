import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

// const modelTarget = {
//     drop(props){
//         moveShirt (props.x, props.y)
//     }
// }

function collect(connect, monitor){
    return{
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}

class Target1 extends Component {
    render() {
        const { connectDropTarget, hovered, item } = this.props;
        return connectDropTarget(
            <div className="target1">
                Model <br />
                <img src={ require('./model.png')} className='image2' alt='test holder2'/>
            </div>
        )
    }
}

export default DropTarget('item', {}, collect)(Target1)