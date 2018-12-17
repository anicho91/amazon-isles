import React from "react";
import * as $ from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col
} from "reactstrap";
import ProviderForm from "./providerForm";

class UserModal extends React.Component {
  state = {
    providerAuthId: localStorage.getItem("token"),
    providerId: "",
    modal: false,
    demoList: [],
    user: null
  };

  //Close&Open Modal
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  //Update demo list
  changeDemoList = event => {
    const demoList = this.state.demoList.concat();
    const demoIdx = event.target.id;

    demoList[demoIdx] = event.target.value;

    this.setState({ demoList: demoList });
  };

  //Add demo input
  addDemo = event => {
    event.preventDefault();
    
    this.setState({
      demoList: this.state.demoList.concat("")
    });
  };

  //Get the input value
  changeHandler = event => {
    
    let [type, prop] = event.target.name.split('.');
    prop = type === "provider" ? prop : type;

    const updatedUser = Object.assign({}, this.state.user);

    if (event.target.name === "availability" && event.target.value === "true") {
      this.setState({
        [event.target.name]: true
      });
    } else if (
      event.target.name === "availability" &&
      event.target.value === "false"
    ) {
      this.setState({
        [event.target.name]: false
      });
    } else if (
        type === "provider"
    ) {
        updatedUser[type][prop] = event.target.value;
    } else {
        updatedUser[prop] = event.target.value;
    }

    this.setState({
      user: updatedUser
    });
  };

  clickHandler = event => {
    event.preventDefault();

    const newUser = {
      userId: this.state.user.userId,
      phone: this.state.user.phone,
      street: this.state.user.street,
      city: this.state.user.city,
      state: this.state.user.state,
      country: this.state.user.country,
      category: this.state.user.category,
      profile_picture: this.state.user.profile_picture
    
    };

    const newProvider = {
        budget: this.state.user.budget,
        job_category: this.state.user.job_category,
        availability: this.state.user.availability,
        demo: this.state.demoList
    };

    $.put(`/api/users/${this.state.providerAuthId}`, newUser)
      .then(updatedData => {
        $.put(`/api/providers/${this.state.providerId}`, newProvider)
            .then(updatedProvider => {
                this.toggle();
                this.props.getProvider();
                // console.log(updatedProvider)
            })
            .catch((error) => {
                console.log(error);
            })
      })
      .catch(error => {
        console.log(error);
      });
  };

  getProvider = event => {
    $.get(`/api/users/${localStorage.getItem("token")}`)
      .then(result => {
        // console.log(result);
        this.setState({
          user: result.data,
          providerId: result.data._id,
          demoList: result.data.demo
        });
        console.log(this.state.demoList);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  //Execute this when the mount is done.
  componentDidMount() {
    this.getProvider();
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Update</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="lg"
        >
          <ModalHeader className="text-info" toggle={this.toggle}>
            Update User Information (Please update the field you want to update.)
          </ModalHeader>
          <ModalBody className="text-info">
            <Container>
              <Row>
                <Col cs="12">
                  {this.state.user && (
                      
                    <ProviderForm
                      handleChange={this.changeHandler}
                      demoChange={this.changeDemoList}
                      key={this.state.user._id}
                      id={this.state.user._id}
                      userId={this.state.user.userId}
                      profile_picture={this.state.user.profile_picture}
                      phone={this.state.user.phone}
                      street={this.state.user.street}
                      city={this.state.user.city}
                      state={this.state.user.state}
                      country={this.state.user.country}
                      job_category={this.state.user.job_category}
                      budget={this.state.user.budget}
                      availability={this.state.user.availability}
                      demoList={this.state.demoList}
                      demoAdd={this.addDemo}
                    />
                  )}
                </Col>
              </Row>
            </Container>
            <ModalFooter>
              <Button color="info" onClick={this.clickHandler}>
                Update Information
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default UserModal;
