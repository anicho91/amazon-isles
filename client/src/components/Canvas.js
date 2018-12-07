import React, { Component } from 'react';
import Item from './canvasComponents/Item.js'
import Target1 from './canvasComponents/Target1.js'
import Target2 from './canvasComponents/Target2.js'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import './canvas.css'




class Canvas extends Component {
    state = {
        items: [
            {
                id: 1,
                type: "garment1",
                image: require('./canvasComponents/shirtButtondown.gif')
            },
            {
                id: 2,
                type: "garment1",
                image: require('./canvasComponents/testshirt.jpg')
            },
            {
                id: 3,
                type: "garment1",
                image: require('./canvasComponents/testshirt2.jpg')
            }
        ]
    }

    componentDidMount(){
        // this.getGarments();
        // this.getFabrics();
     
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
     
        img.onload = () => {
          ctx.drawImage (img, 0, 0)
          ctx.scale(.1,.1);
          ctx.fillStyle = CanvasPattern;
          ctx.fill();
          ctx.scale(.1,.1);
     
          ctx.font = "40px Courier"
          ctx.fillText(this.props.text, 210, 75)
        }
     
      }

modelItem = (id) => {
    console.log('model ' + id)
}

saveItem = (id) => {
    console.log('save ' + id)
}

render() {
    return(
        <div className="App">
            <header className="App-header">
                <h1>Welcome</h1>
            </header>
            <div className="App-intro">
                <div className="app-container">
                    <div className="item-container">
                    
                        {this.state.items.map((item, index) => (
                            <Item key={item.id} item={item} handleDrop={(id) => this.modelItem(id)}/>
                        ))}
                    </div>
                    <div>
                      
                    <Target1 />
                    </div>
                    
                    <Target2 />
                    
                </div>
                
        <button onClick={this.state.fabricsList}>fabric</button>
        <div >

        </div>

        <div>
        <img ref="mask" src={"./assets/images/shirtButtondown.gif"} className="garment" width={400} height={600} alt="shirt"/>

        <canvas ref="canvas" className="fabric" width={400} height={600} />

        <img ref="image" src={"https://s3.amazonaws.com/roostery-composites/compost/4398006/fabric-preview-fq_0_m.jpg"} className="hidden" alt="fabric"/>
        </div>
            </div>
        </div>


    )
}
}

export default DragDropContext (HTML5Backend)(Canvas)