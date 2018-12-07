import  React,  { Component } from 'react';
import * as $ from 'axios';
import User from '../../components/ClientUser/clientA'
import './clientpage.css'
import Measurements from '../../components/ClientUser/clientM';

class Clientpage extends Component {
    state = {
        name: '',
        waist: '',
        bust: '',
        armLength: '',
        legLength: '',
        image: {
            type: 'Profile',
            imagesrc: require('../../components/canvasComponents/w1.jpg')
        },
        address: [ {
            
        }]
    }



    getUser = (event) => {
        $.get(`api/users/5c09ac8f2567d6637c665d23`)
        .then((results)=> {
        console.log(results);
        this.setState(
            {address: results.data}
            // {addressId: results.data._id},
            // {street: results.data.street}, 
            // {city: results.data.city},
            // {state: results.data.state},
            // {country: results.data.country}
        )
        })
    }

    componentDidMount() {
        this.getUser()
    }

    // getMeasurements = () => {
    //     $.get('api/users')
    //     .then((results)=>
        
    //     this.setState(
    //         {}
    //     )
    //     )
    // }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.name}!</h1>

                <div className="userDiv">
                    <div className="userImage">
                        <img src={this.state.image.imagesrc} className='image' alt='test holder' />
                    </div>
                    <div className="userInfo">
                        <div className="userDBinfo">
                        <div className="infoTitle">Address</div>
                            {this.state.address.map(users => (
                                console.log(users),
                                <User 
                                    key={users._id}
                                    id={users._id}
                                    street={users.street}
                                    city={users.city}
                                    state={users.state}
                                    country={users.country}
                                />
                            ))}


                        </div>

                        <div className="measurements">
                            <span className="measTitle">Measurements</span><br/>
                                {this.state.address.map(measurements => (
                                    console.log(measurements.measurement),
                                    <Measurements 
                                        key={measurements._id}
                                        id={measurements._id}
                                        waist={measurements.weist}
                                        
                                    />
                                ))}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Clientpage;