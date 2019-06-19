import React, { Component } from "react";
import { Form, Grid, Modal, Button, Icon, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateUser } from "../actions/users";
import { store } from "../index"
import {UPDATE_USER} from "../actions"

class UpdateProfileModal extends Component {
  state = { displayName: "", password: "", about: "", open: false };

  handleChange = (event, { value }) =>
    this.setState({ [event.target.name]: value });

  handleModal = () => {
    this.setState({ open: !this.state.open });
  };
  handleSubmit = () => {
    this.props.updateUser({ ...this.state });
    this.setState({ displayName: "", password: "", about: "" });
    this.handleModal();
  }; 
  

  render() {
    return (
      <React.Fragment>
        <Modal
          trigger={
            <Button
              onClick={this.handleModal}
              style={{ backgroundColor: "#ff0000", color: "white" }}
            >
              <Icon name="vcard" />
              Update Profile
            </Button>
          }
          open={this.state.open}
          onClose={this.handleModal}
        >
          <Card style={{ width: "100%" }}>
            <Card.Content>
              <Form onSubmit={this.handleSubmit} size="large">
                <Grid container stackable>
                  <Grid.Column floated="left" width={6}>
                    <Form.Input
                      fluid
                      placeholder="New display name"
                      name="displayName"
                      label="Change your display name!"
                      onChange={this.handleChange}
                    />
                    <Form.Input
                      fluid
                      placeholder="New password"
                      name="password"
                      label="Change your password!"
                      onChange={this.handleChange}
                    />
                    <Form.TextArea
                      placeholder="Write your story..."
                      name="bio"
                      label="Change your bio!"
                      onChange={this.handleChange}
                    />
                  </Grid.Column>
                  <Grid.Column floated="right" width={6}>
                    <Form.Button
                      style={{ backgroundColor: "#ff0000", color: "white" }}
                      content="Save your changes!"
                      onSubmit={this.handleSubmit}
                    />
                  </Grid.Column>
                </Grid>
              </Form>
            </Card.Content>
          </Card>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.login.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: userData => dispatch(updateUser(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfileModal);
