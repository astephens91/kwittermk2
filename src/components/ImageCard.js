import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUser } from "../actions";
import UserImage from "./UserImage";
import "../index.css";


class ImageCard extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <React.Fragment>
        <Card className="ProfileImage" style={{ margin: "auto" }}>
          <Card.Content style={{ margin: "auto" }}>
            <UserImage userId={this.props.userId} seize="huge" />
          </Card.Content>
          <Card.Content></Card.Content>
          <Card.Content>
            <Card.Header style={{ textAlign: "left" }}>
              {this.props.user.username}
              <br></br>
             <Icon  className="small black at">{this.props.user.displayName}</Icon>
            </Card.Header>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login != null) {
    return {
      userId: state.auth.login.id,
      user: state.users.user

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
