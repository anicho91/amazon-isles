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
        token: localStorage.getItem('token'),
        modal: false,
        userId: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        country: "",
        job_category: "",
        availability: true,
        budget: "",
        category: "",
        demoInput: "",
        profile_picture: "",
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

    //Update demo list
    changeDemoList = (event) => {
        const demoList = this.state.demoList.concat();
        const demoIdx = event.target.id;

        demoList[demoIdx] = event.target.value;

        this.setState({ demoList: demoList });
    }

    //Add deno input
    addDemo = (event) => {
        event.preventDefault();
        this.setState({
            demoList: this.state.demoList.concat("")
        });
    }


    //Get the input value
    changeHandler = (event) => {

        if (event.target.name === "availability" && event.target.value === "true") {

            this.setState({
                [event.target.name]: true
            });
        }
        else if (event.target.name === "availability" && event.target.value === "false") {
            this.setState({
                [event.target.name]: false
            });
        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }


    }

    clickHandler = (event) => {

        event.preventDefault();

        const newUser = {
            userId: this.state.userId,
            token: this.state.token,
            phone: this.state.phone,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            category: this.state.category,
            profile_picture: this.state.profile_picture
        };

        const newProvider = {
            budget: this.state.budget,
            job_category: this.state.job_category,
            availability: this.state.availability,
            demo: this.state.demoList
        };

        $.put(`/api/users/${this.state.token}`, newUser)
            .then((updatedData) => {
                $.put(`/api/providers/${this.state.token}`, newProvider)
                    .then((updatedProvider) => {
                        this.toggle();
                        this.props.getProvider();
                    })
                    .catch((error) => {
                        console.log(error);
                    })

            })
            .catch((error) => {
                console.log(error);
            });


    }

    getProvider = () => {
        $.get(`/api/users/${localStorage.getItem('token')}`)
            .then((result) => {
                this.setState({
                    orderArray: result.data.orders,
                    userId: result.data.userId,
                    token: result.data.token,
                    phone: result.data.phone,
                    street: result.data.street,
                    city: result.data.city,
                    state: result.data.state,
                    country: result.data.country,
                    job_category: result.data.job_category,
                    budget: result.data.budget,
                    availability: result.data.availability,
                    category: result.data.category,
                    profile_picture: result.data.profile_picture,
                    demoList: result.data.demo || [],
                    isUserUpdate: false
                });
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
                                        <Label for="profile_picture">Profile Picture</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="profile_picture" id="profile_picture" value={this.state.profile_picture} placeholder="Please enter your profile URL" />
                                        <br />
                                        <Label for="userId">User Name</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="userId" id="userId" value={this.state.userId} placeholder="Please type your new user ID." />
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
                                        <Label for="budget">Will Work For($)</Label><br />
                                        <Input type="text" onChange={this.changeHandler} name="budget" id="budget" value={this.state.budget} placeholder="Please type your new will work money." />
                                        <br />
                                        <Label for="availability">Availability</Label><br />
                                        <Input type="select" onChange={this.changeHandler} name="availability" id="availability" placeholder="Please change your availability">
                                            <option value={this.state.availability}>Please select the availability</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </Input>
                                        <br />
                                        <Label for="demoList">Demo List</Label><br />
                                        {this.state.demoList.length <= 0 ? (
                                            <Input type="text" onChange={this.changeDemoList} name="demoInput0" id={0} value={this.state.demoList[0]} placeholder="Please enter the URL for demo" />
                                        ) : (
                                            this.state.demoList.map((demo, i) => {
                                                const inputName = `demoInput${i}`
                                                return <Input type="text" onChange={this.changeDemoList} name={inputName} id={i} key={i} value={demo} placeholder="Please enter the URL for demo" />
                                            })
                                        )}
                                        <Button onClick={this.addDemo}>Add</Button>
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