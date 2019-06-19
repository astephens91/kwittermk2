import React, { Component } from "react";
import { domain, handleJsonResponse } from "../actions/constants";
import ostrichAvatar from "../img/ostrichAvatar.png";


class FeedMessage extends Component {
  state = {
    photoUrl: ostrichAvatar,
    username: "",
    displayName: ""
  };
  componentDidMount() {
    this.getUserInfo()
  }

  getUserInfo() {
    const url = domain + "/users/" + this.props.userId;
    fetch(url)
      .then(handleJsonResponse)
      .then(result => {
        //   console.log(result)
          this.setState({
              photoUrl: result.user.photoUrl ? result.user.photoUrl : ostrichAvatar,
              username: result.user.username,
              displayName: result.user.displayName
          })
        //   console.log(this.state)
      })
      
  }
  render() {
    return (
      <React.Fragment>
        <p>{this.state.username}</p>
        <p>{this.props.createdAt}</p>
        <p>{this.props.text}</p>
        <p>Number of likes: {this.props.likes}</p>
        <button>Like/Unlike</button>
      </React.Fragment>
    )
  }
}

export default FeedMessage;
