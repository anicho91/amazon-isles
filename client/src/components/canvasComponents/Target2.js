import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor){
    return{
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}

class Target2 extends Component {
    render() {
        const { connectDropTarget, hovered, item } = this.props;
        return connectDropTarget(
            <div className="target2">
                Save
            </div>
        )
    }
}

export default DropTarget('item', {}, collect)(Target2)