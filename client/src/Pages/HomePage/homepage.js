import React, { Component } from 'react';
import FabWidget from '../../components/Fashion/FashionWidget';
import StyleFooter from '../../components/Style/stylefooter';
import ButtonAppBar from '../../components/Style/newheader';
import './hp.css'
import { login0, login1 } from '../../components/Auth/Auth'

class Homepage extends Component {
    
    render() {
        return (
            <div>
                <ButtonAppBar />
                <div className="mainBody">

                    <div>
                        <div className="hpImages">
                            <div className="hpImages2">
                                <img className="clientImg" 
                                src={require("../../Images/dresses.jpg")}
                                alt="client entrance"
                                />

                                <button className='clientText' onClick={login0}>Client</button>
                            </div>

                            <div className="hpImages2">
                                <img className="providerImg" 
                                src={require("../../Images/tailor3.jpg")}
                                alt="provider entrance"
                                />

                                <button className='providerText' onClick={login1}>Provider</button>
                            </div>
                        </div>
                        
                        {/* <FabWidget /> */}
                    </div>
                    <div>
                        <StyleFooter />
                    </div >
                </div>
            </div>
        )
    }
}


export default Homepage;