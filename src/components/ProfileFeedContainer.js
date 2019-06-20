import React, { Component } from "react";
// import { Card, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUserProfile } from "../actions";
// import { Feed } from "."
import "../index.css"

class ProfileFeedContainer extends Component {
  componentDidMount() {
    this.props.getUserProfile()
  }
  render() {
    return (
      <React.Fragment className="WriteKweet">
        {/* <Card className="ProfileFeedContainer"> */}
        {/* <p>{this.props.user.username}</p> */}
        {/* <Icon name="blue at">{this.props.user.displayName}</Icon> */}
        {/* <p>
          Account Created: {new Date(this.props.user.createdAt).toDateString()}
        </p> */}
        {/* <p>
          Last Updated: {new Date(this.props.user.updatedAt).toDateString()}
        </p> */}
        {/* <Feed messages = {this.props.messages} /> */}
        {/* </Card> */}
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
)(ProfileFeedContainer);