import React from "react";
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

const ClientForm = props => (
  <div key={props.id} className="address">
    <Form>
      <Label for="profile_picture">Profile Picture</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="profile_picture"
        id="profile_picture"
        value={props.pic}
        placeholder="Please enter your profile URL"
      />
      <br />

      <Label for="phone">Phone Number</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="phone"
        id="phone"
        value={props.phone}
        placeholder="Please type your new Phone number."
      />
      <br />
      <Label for="street">Street Address</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="street"
        id="street"
        value={props.street}
        placeholder="Please type your new Street Address"
      />
      <br />
      <Label for="city">City</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="city"
        id="city"
        value={props.city}
        placeholder="Please type your new City"
      />
      <br />
      <Label for="state">State</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="state"
        id="state"
        value={props.state}
        placeholder="Please type your new State"
      />
      <br />
      <Label for="country">Country</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="country"
        id="country"
        value={props.country}
        placeholder="Please type your new country"
      />
      <br />
      <Label for="bust">Bust Measument</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="measurement.bust"
        id="bust"
        value={props.bust}
        placeholder="Please type your new bust measurement"
      />
      <br />
      <Label for="waist">Waist Measument</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="measurement.waist"
        id="waist"
        value={props.waist}
        placeholder="Please type your new waist measurement"
      />
      <br />
      <Label for="hips">Hip Measument</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="measurement.hips"
        id="hips"
        value={props.hips}
        placeholder="Please type your new hip measurement"
      />
      <br />
      <Label for="knee_length">Knee Length Measument</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="measurement.knee_length"
        id="knee_length"
        value={props.klength}
        placeholder="Please type your new knee_length measurement"
      />
      <br />
      <Label for="leg_length">Leg Length Measument</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="measurement.leg_length"
        id="leg_length"
        value={props.llength}
        placeholder="Please type your new leg_length measurement"
      />
      <br />
      <Label for="bp_length">Bust to Shoulder Measument</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="measurement.bp_length"
        id="bp_length"
        value={props.bplength}
        placeholder="Please type your new bp_length measurement"
      />
      <br />
      <Label for="back_length">Back Length Measument</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="measurement.back_length"
        id="back_length"
        value={props.blength}
        placeholder="Please type your new back_length measurement"
      />
      <br />
      <Label for="arm_length">Arm Length Measument</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="measurement.arm_length"
        id="arm_length"
        value={props.alength}
        placeholder="Please type your new arm_length measurement"
      />
      <br />
    </Form>
  </div>
);

export default ClientForm;
