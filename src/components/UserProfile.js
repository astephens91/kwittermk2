import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Feed } from "semantic-ui-react";
import {
  getUserProfile,
  toggleLikeThenUpdateMessageById as toggleLike
} from "../actions";
import Navbar from "./Navbar";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getUserProfile();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Card>
          <Feed>
            <Feed.Label>
              <Feed.Summary>
                <h1>This is the user profile</h1>
                <Feed.User>Name {this.props.user.username}</Feed.User>
                <br />
                <Feed.User>
                  Display Name: {this.props.user.displayName}
                </Feed.User>
                <p>About: {this.props.user.about}</p>
                <p>
                  Joined {new Date(this.props.user.createdAt).toDateString()}
                </p>
               
              </Feed.Summary>
            </Feed.Label>
          </Feed>
          {this.props.messages.map(message => {
            return (
              <React.Fragment>
                <Feed>
                  <h3>
                    <Feed.Summary>
                      {/* <p>{message.userId}</p> */}
                      <Feed.Date>
                        {new Date(message.createdAt).toDateString()}
                      </Feed.Date>
                      <h3>{message.text}</h3>
                      <p>{message.likes.length}</p>
                    </Feed.Summary>
                  </h3>
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
  getUserProfile,
  toggleLike
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
