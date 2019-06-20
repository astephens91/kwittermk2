import React, { Component } from "react";
import { domain, handleJsonResponse } from "../actions/constants";
import { Button, Card, Icon, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleLikeThenUpdateMessageById as toggleLike } from "../actions"
import ostrichAvatar from "../img/ostrichAvatar.png";

class FeedMessage extends Component {
  state = {
    photoUrl: ostrichAvatar,
    username: "",
    displayName: ""
  };
  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    const url = domain + "/users/" + this.props.userId;
    fetch(url)
      .then(handleJsonResponse)
      .then(result => {
        this.setState({
          photoUrl: result.user.photoUrl ? result.user.photoUrl : ostrichAvatar,
          username: result.user.username,
          displayName: result.user.displayName
        });
      });
  }
  render() {
    return (
      <React.Fragment>
        <Card className="FeedCard">
        <Card.Content>
        <Card.Header>{this.state.username}</Card.Header>
        <Card.Meta>{new Date(this.props.createdAt).toDateString()}</Card.Meta>
        <Message className="FeedText">{this.props.text}</Message>
        <Icon name="hand peace">{this.props.likes}</Icon>
        <br></br>
        <br></br>
        <Button
          className="LikeButton"
          onClick={event => this.props.toggleLike(this.props.messageid)}
        >
          Like
        </Button>{" "}
        </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  toggleLike
};
export default connect(
  null,
  mapDispatchToProps
)(FeedMessage);
