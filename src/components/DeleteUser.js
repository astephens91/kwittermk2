import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteUserProfile } from "../actions/users";

class DeleteUser extends Component {
  state = { open: false };

  handleModal = () => {
    this.setState({ open: !this.state.open });
  };

  handleDelete = () => {
    this.props.deleteUserProfile(this.props.token);
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          trigger={
            <Button style={{backgroundColor: "#8D99AE"}} onClick={this.handleModal}>
              <Icon name="user delete" />
              Delete Profile
            </Button>
          }
          open={this.state.open}
          onClose={this.handleModal}
        >
          <Header content="Remove Account" />
          <Modal.Content>
            <p>Are you sure you want to kwit kwitter?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="red" onClick={this.handleModal}>
              NO
            </Button>
            <Button basic onClick={this.handleDelete}>
              Yes
            </Button>
          </Modal.Actions>
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
    deleteUserProfile: token => dispatch(deleteUserProfile(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteUser);
