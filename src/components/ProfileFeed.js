import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../actions";

class ProfileFeed extends Component {
  componentDidMount() {
    this.props.getUserProfile()
  }
  render() {
    return (
      <React.Fragment>
        <p>This is the user profile</p>
        <p>Username: {this.props.user.username}</p>
        <p>Display Name: {this.props.user.displayName}</p>
        <p>About: {this.props.user.about}</p>
        <p>
          Account Created: {new Date(this.props.user.createdAt).toDateString()}
        </p>
        <p>
          Last Updated: {new Date(this.props.user.updatedAt).toDateString()}
        </p>
        {this.props.messages.map(message => {
          return (
            <React.Fragment>
          <p>{message.userId}</p>
          <p>{message.createdAt}</p>
          <p>{message.text}</p>
          <p>Number of likes: {message.likes.length}</p>
          {/* <button>Like/Unlike</button> */}
          </React.Fragment>
          );
        })};
        
        {/* <Navbar /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user || {},
    messages: state.messages.userMessages
  };
};

const mapDispatchToProps = {
  getUserProfile
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFeed);