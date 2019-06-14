import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Feed, Icon } from "semantic-ui-react";
import { getUserProfile } from "../actions";
import Navbar from "./Navbar";
import UpdateProfileModal from "./UpdateProfileModal"

class UserProfile extends Component {
  componentDidMount() {
    this.props.getUserProfile();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Card style={{margin: "auto"}}>
        <UpdateProfileModal />
        <Feed>
          <Feed.Label>
            <Feed.Summary>
              <h1>This is the user profile</h1>
              <Feed.User>Username: {this.props.user.username}</Feed.User>
              <br></br>
              <Feed.User>Display Name: {this.props.user.displayName}</Feed.User>
              <p>About: {this.props.user.about}</p>
              <p>
                Account Created:{" "}
                {new Date(this.props.user.createdAt).toDateString()}
              </p>
              <p>
                Last Updated:{" "}
                {new Date(this.props.user.updatedAt).toDateString()}
              </p>
            </Feed.Summary>
          </Feed.Label>
        </Feed>
        {this.props.messages.map(message => {
          return (
            <React.Fragment>
              <Feed>
                <Feed.Label>
                  <Feed.Summary>
              <p>{message.userId}</p>
              <Feed.Date>{new Date(message.createdAt).toDateString()}</Feed.Date>
              <h2>{message.text}</h2>
              <Feed.Like>
              <Icon name="like">{message.likes.length}</Icon>
              </Feed.Like>
              {/* <button>Like/Unlike</button> */}
              </Feed.Summary>
              </Feed.Label>
              </Feed>
            </React.Fragment>
          );
        })}
        </Card>
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
)(UserProfile);
