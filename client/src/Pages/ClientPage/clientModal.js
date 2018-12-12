import React from 'react';
import * as $ from 'axios';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Row,
    Col,
    Form,
    Label,
    Input,
} from 'reactstrap';
import ClientForm from '../../components/ClientUser/clientF'

class ClientModal extends React.Component {

    state = {
        clientAuthID: "auth0|5c0c172ee978c52e154f10b7",
        clientID: '5c1137c75d5b933d0cf3c538',
        user: null,
        modal: false,
        phone: "",
        street: "",
        city: "",
        state: "",
        country: "",
        profile_picture: "",
        bust: 0,
        waist: 0,
        hips: 0,
        knee_length: 0,
        leg_length: 0,
        bp_length: 0,
        back_length: 0,
        arm_length: 0
    }

    //Close&Open Modal
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    getUser = (event) => {
        $.get(`/api/users/${this.state.clientAuthID}`).then(results => {
          
          this.setState({ user: results.data });
          console.log(this.state.user)
          
        });
      }

    changeHandler = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        });
        }


    clickHandler = (event) => {

        event.preventDefault();

        const newUser = {
            phone: this.state.phone,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            profile_picture: this.state.profile_picture
        };

        const newClient = {
            measurement: {
            bust: this.state.bust,
            waist: this.state.waist,
            hips: this.state.hips,
            knee_length: this.state.knee_length,
            leg_length: this.state.leg_length,
            bp_length: this.state.bp_length,
            back_length: this.state.back_length,
            arm_length: this.state.arm_length
            }
        };

        $.put(`/api/users/${this.state.clientAuthID}`, newUser)
            .then((updatedData) => {
                $.put(`/api/clients/${this.state.clientID}`, newClient)
                    .then((updatedClient) => {
                        this.toggle();
                        this.props.getClient();
                    })
                    .catch((error) => {
                        console.log(error);
                    })

            })
            .catch((error) => {
                console.log(error);
            });


    }

    // getClient = () => {
    //     $.get(`/api/users/${this.state.clientAuthID}`)
    //         .then((result) => {
    //             console.log(result)
    //             this.setState({
                    
    //                 phone: result.data.phone,
    //                 street: result.data.street,
    //                 city: result.data.city,
    //                 state: result.data.state,
    //                 country: result.data.country,                    
    //                 profile_picture: result.data.profile_picture,
    //                 bust: result.data.bust,
    //                 waist: result.data.measument.waist,
    //                 hips: result.data.measument.hips,
    //                 knee_length: result.data.measument.knee_length,
    //                 leg_length: result.data.measument.leg_length,
    //                 bp_length: result.data.measument.bp_length,
    //                 back_length: result.data.measument.back_length,
    //                 arm_length: result.data.measument.arm_length,            
    //                 isUserUpdate: false
    //             });
                
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    // Execute this when the mount is done.
    componentDidMount() {
        // this.getClient();
        this.getUser()
        
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>Update</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
                    <ModalHeader className="text-info" toggle={this.toggle}>Update User Information (Please update the field you want to update.)</ModalHeader>
                    <ModalBody className="text-info">
                        <Container>
                            <Row>
                                <Col cs="12">
                                   {this.state.user && (
                                    <ClientForm 
                                    handleChange={this.changeHandler}
                                    key={this.state.user._id}
                                    id={this.state.user._id}
                                    pic={this.state.user.profile_picture}
                                    phone={this.state.user.phone}
                                    street={this.state.user.street}
                                    city={this.state.user.city}
                                    state={this.state.user.state}
                                    country={this.state.user.country}
                                    bust={this.state.user.measurement.bust}
                                    waist={this.state.user.measurement.waist}
                                    hips={this.state.user.measurement.hips}
                                    klength={this.state.user.measurement.knee_length}
                                    llength={this.state.user.measurement.leg_length}
                                    bplength={this.state.user.measurement.bp_length}
                                    blength={this.state.user.measurement.back_length}
                                    alength={this.state.user.measurement.arm_length}
                                    />
                                   )}
                                </Col>
                            </Row>
                        </Container>
                        <ModalFooter>
                            <Button color="info" onClick={this.clickHandler}>Update Information</Button>
                            <Button color="secondary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </ModalBody>
                </Modal>
            </div>
        );

    }

}

export default ClientModal;