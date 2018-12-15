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
  Col,
  Form,
  Label,
  Input
} from "reactstrap";
import ClientForm from "../../components/ClientUser/clientF";

class ClientModal extends React.Component {
  state = {
    clientAuthID: localStorage.getItem('token'),
    clientID: '',
    user: null,
    modal: false
  };

  //Close&Open Modal
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  getUser = event => {
    $.get(`/api/users/${this.state.clientAuthID}`).then(results => {
      this.setState({ user: results.data, clientID: results.data._id });      
      
    });
  };

  changeHandler = event => {
    let [type, prop] = event.target.name.split(".");
    prop = type === "measurement" ? prop : type;

    const updatedUser = Object.assign({}, this.state.user);

    if (type === "measurement") {
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
      phone: this.state.user.phone,
      street: this.state.user.street,
      city: this.state.user.city,
      state: this.state.user.state,
      country: this.state.user.country,
      profile_picture: this.state.user.profile_picture
    };

    const newClient = {
      measurement: {
        bust: this.state.user.measurement.bust,
        waist: this.state.user.measurement.waist,
        hips: this.state.user.measurement.hips,
        knee_length: this.state.user.measurement.knee_length,
        leg_length: this.state.user.measurement.leg_length,
        bp_length: this.state.user.measurement.bp_length,
        back_length: this.state.user.measurement.back_length,
        arm_length: this.state.user.measurement.arm_length
      }
    };

    $.put(`/api/users/${this.state.clientAuthID}`, newUser)
      .then(updatedData => {
        $.put(`/api/clients/${this.state.clientID}`, newClient)
          .then(updatedClient => {
            this.toggle();
            this.props.getClient();
            console.log(updatedClient)
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  

  // Execute this when the mount is done.
  componentDidMount() {
    
    this.getUser()
    
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
            Update User Information (Please update the field you want to
            update.)
          </ModalHeader>
          <ModalBody className="text-info">
            <Container>
              <Row>
                <Col cs="12">
                  {this.state.user && this.state.user.measurement && (
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

export default ClientModal;
