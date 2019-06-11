import React, { Component } from "react";
import { Feed } from "semantic-ui-react";

class HomeFitem extends Component {
  render() {
    return (
      <Feed.Content>
        <Feed.User>{this.props.userID}</Feed.User> kweeted {" "}
        {this.props.text}
        <Feed.Date>{this.props.createdAt}</Feed.Date>
      </Feed.Content>
    );
  }
}

export default HomeFitem;
