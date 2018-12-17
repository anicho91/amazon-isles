import React from "react";
import {
  Button,
  Form,
  Label,
  Input
} from "reactstrap";

const ProviderForm = props => (
  <div key={props.id} className="providerForm">
    <Form>
      <Label for="profile_picture">Profile Picture</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="profile_picture"
        id="profile_picture"
        value={props.profile_picture}
        placeholder="Please enter your profile URL"
      />
      <br />
      <Label for="userId">User Name</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="userId"
        id="userId"
        value={props.userId}
        placeholder="Please type your new user ID."
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
      <Label for="job_category">Job Category</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="job_category"
        id="job_category"
        value={props.job_category}
        placeholder="Please type your new category"
      />
      <br />
      <Label for="budget">Will Work For($)</Label>
      <br />
      <Input
        type="text"
        onChange={props.handleChange}
        name="budget"
        id="budget"
        value={props.budget}
        placeholder="Please type your new will work money."
      />
      <br />
      <Label for="availability">Availability</Label>
      <br />
      <Input
        type="select"
        onChange={props.handleChange}
        name="availability"
        id="availability"
        placeholder="Please change your availability"
      >
        <option value={props.availability}>
          Please select the availability
        </option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </Input>
      <br />
      <Label for="demoList">Demo List</Label>
      <br />
      {
         props.demoList.map((demo, i) => { 
          const inputName = `demoInput${i}`;
          return (
            <Input
              type="text"
              onChange={props.demoChange}
              name={inputName}
              id={i}
              key={i}
              value={demo}
              placeholder="Please enter the URL for demo"
            />
          );
        })
      }
      
      <Button onClick={props.demoAdd}>Add</Button>
      <br />
    </Form>
  </div>
);

export default ProviderForm;
