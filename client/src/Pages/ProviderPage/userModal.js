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

class UserModal extends React.Component {

    state = {
        providerID: "5c0c7b49a5a9a90d139293ee",
        modal: false,
        userId: "",
        password: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        country: "",
        job_category: "",
        demoList: [],
        orderArray: [],
        orderList: []
    }

    //Close&Open Modal
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }


    //Get the input value
    changeHandler = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);

    }

    clickHandler = (event) => {

        event.preventDefault();

        const newProvider = {
            userId: this.state.userId,
            password: this.state.password,
            phone: this.state.phone,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            job_category: this.state.job_category
        }

        $.put(`/api/users/${this.state.providerID}`, newProvider)
            .then((updatedData) => {
                this.toggle();
                this.props.getProvider();
            })
            .catch((error) => {
                console.log(error);
            });


    }

    getProvider = () => {
        $.get(`/api/users/${this.state.providerID}`)
            .then((result) => {
                this.setState({ orderArray: result.data.orders });
                this.setState({ userId: result.data.userId });
                this.setState({ password: result.data.password });
                this.setState({ phone: result.data.phone });
                this.setState({ street: result.data.street });
                this.setState({ city: result.data.city });
                this.setState({ state: result.data.state });
                this.setState({ country: result.data.country });
                this.setState({job_category: result.data.job_category});
                this.setState({ demoList: result.data.demo });
                this.setState({ isUserUpdate: false });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //Execute this when the mount is done.
    componentDidMount() {
        this.getProvider();
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>Update</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
                    <ModalHeader className="text-info" toggle={this.toggle}>Update User Information(Please update the field you want to update.)</ModalHeader>
                    <ModalBody className="text-info">
                        <Container>
                            <Row>
                                <Col cs="12">
                                    <Form>
                                        <Label for="userId">User Name</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="userId" id="userId" value={this.state.userId} placeholder="Please type your new user ID." />
                                        <br />
                                        <Label for="password">Password</Label><br />
                                        <Input type="password" onChange={this.changeHandler} name="password" id="password" value={this.state.password} placeholder="Please type your new password." />
                                        <br />
                                        <Label for="phone">Phone Number</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="phone" id="phone" value={this.state.phone} placeholder="Please type your new Phone number." />
                                        <br />
                                        <Label for="street">Street Address</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="street" id="street" value={this.state.street} placeholder="Please type your new Street Address" />
                                        <br />
                                        <Label for="city">City</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="city" id="city" value={this.state.city} placeholder="Please type your new City" />
                                        <br />
                                        <Label for="state">State</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="state" id="state" value={this.state.state} placeholder="Please type your new State" />
                                        <br />
                                        <Label for="country">Country</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="country" id="country" value={this.state.country} placeholder="Please type your new country" />
                                        <br />
                                        <Label for="job_category">Job Category</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="job_category" id="job_category" value={this.state.job_category} placeholder="Please type your new category" />
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

export default UserModal;