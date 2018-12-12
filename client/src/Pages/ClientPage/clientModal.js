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

class ClientModal extends React.Component {

    state = {
        clientID: "5c0e89c9f571a32c2022fddb",
        modal: false,
        phone: "",
        street: "",
        city: "",
        state: "",
        country: "",
        profile_picture: "",
        bust: '',
        waist: '',
        hips: '',
        knee_length: '',
        leg_length: '',
        bp_length: '',
        back_length: '',
        arm_length: '',
    }

    //Close&Open Modal
    toggle = () => {
        this.setState({
            modal: !this.state.modal
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
            bust: this.state.bust,
            waist: this.state.waist,
            hips: this.state.hips,
            knee_length: this.state.knee_length,
            leg_length: this.state.leg_length,
            bp_length: this.state.bp_length,
            back_length: this.state.back_length,
            arm_length: this.state.arm_length
        };

        $.put(`/api/users/${this.state.clientID}`, newUser)
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
    //     $.get(`/api/users/${this.state.clientID}`)
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

    //Execute this when the mount is done.
    // componentDidMount() {
    //     this.getClient();
    // }

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
                                    <Form>
                                        <Label for="profile_picture">Profile Picture</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="profile_picture" id="profile_picture" 
                                        value={this.state.profile_picture} placeholder="Please enter your profile URL" />
                                        <br />
                                        
                                        <Label for="phone">Phone Number</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="phone" id="phone" 
                                        value={this.state.phone} placeholder="Please type your new Phone number." />
                                        <br />
                                        <Label for="street">Street Address</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="street" id="street" 
                                        value={this.state.street} placeholder="Please type your new Street Address" />
                                        <br />
                                        <Label for="city">City</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="city" id="city" 
                                        value={this.state.city} placeholder="Please type your new City" />
                                        <br />
                                        <Label for="state">State</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="state" id="state" 
                                        value={this.state.state} placeholder="Please type your new State" />
                                        <br />
                                        <Label for="country">Country</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="country" id="country" 
                                        value={this.state.country} placeholder="Please type your new country" />
                                        <br />
                                        <Label for="bust">Bust Measument</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="bust" id="bust" 
                                        value={this.state.bust} placeholder="Please type your new bust measurement" />
                                        <br />
                                        <Label for="waist">Waist Measument</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="waist" id="waist" 
                                        value={this.state.waist} placeholder="Please type your new waist measurement" />
                                        <br />
                                        <Label for="hip">Hip Measument</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="hip" id="hip" 
                                        value={this.state.hip} placeholder="Please type your new hip measurement" />
                                        <br />
                                        <Label for="knee_length">Knee Length Measument</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="knee_length" id="knee_length" 
                                        value={this.state.knee_length} placeholder="Please type your new knee_length measurement" />
                                        <br />
                                        <Label for="leg_length">Leg Length Measument</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="leg_length" id="leg_length" 
                                        value={this.state.leg_length} placeholder="Please type your new leg_length measurement" />
                                        <br />
                                        <Label for="bp_length">Bust to Shoulder Measument</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="bp_length" id="bp_length" 
                                        value={this.state.bp_length} placeholder="Please type your new bp_length measurement" />
                                        <br />
                                        <Label for="back_length">Back Length Measument</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="back_length" id="back_length" 
                                        value={this.state.back_length} placeholder="Please type your new back_length measurement" />
                                        <br />
                                        <Label for="arm_length">Arm Length Measument</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="arm_length" id="arm_length" 
                                        value={this.state.arm_length} placeholder="Please type your new arm_length measurement" />
                                        <br />
                                    </Form>
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