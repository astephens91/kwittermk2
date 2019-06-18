import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUser } from "../actions";
import UserImage from "./UserImage";

class ImageCard extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <Card style={{ margin: "auto" }}>
        <Card.Content style={{ margin: "auto" }}>
          <UserImage userId={this.props.userId} seize="huge" />
        </Card.Content>
        <Card.Content>
          <Card.Header style={{ textAlign: "center" }}>
            {this.props.displayName}
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login != null) {
    return {
      userId: state.auth.login.id,
      displayName: state.users.user.displayName
    };
  } else {
    return {
      userId: null,
      displayName: null
    };
  }
};

const mapDispatchToProps = dispatch => {
  return { getUser: () => dispatch(getUser()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageCard);
