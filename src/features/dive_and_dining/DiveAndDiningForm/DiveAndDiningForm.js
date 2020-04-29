import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class DiveAndDiningForm extends Component {
  // FORM STATE
  state = {
    title: "",
    description: "",
    city: "",
    state: "",
    country: ""
  };

  handleFormSubmit = listing => {
    listing.preventDefault();
    this.props.createListing(this.state)
  };

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { cancelFormOpen } = this.props;
    const {
      title,
      description,
      city,
      state,
      country
    } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete={"off"}>
          <Form.Field>
            <label>Dive or Dining Title</label>
            <input
              name={"title"}
              onChange={this.handleInputChange}
              value={title}
              placeholder={"Title"}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              name={"description"}
              onChange={this.handleInputChange}
              value={description}
              placeholder={"Description"}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name={"city"}
              onChange={this.handleInputChange}
              value={city}
              placeholder={"City"}
            />
          </Form.Field>
          <Form.Field>
            <label>State</label>
            <input
              name={"state"}
              onChange={this.handleInputChange}
              value={state}
              placeholder={"State"}
            />
          </Form.Field>
          <Form.Field>
            <label>Country</label>
            <input
              name={"country"}
              onChange={this.handleInputChange}
              value={country}
              placeholder={"Country"}
            />
          </Form.Field>

          <Button positive type={"submit"}>
            Submit
          </Button>
          <Button type={"button"} onClick={cancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default DiveAndDiningForm;
