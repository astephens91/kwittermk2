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
      <div className="WriteKweet">
       
      </div>
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