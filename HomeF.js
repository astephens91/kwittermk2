import React, { Component } from "react";
import { Feed } from "semantic-ui-react";
import { getMessages, getUsers } from "../actions";
import { connect } from "react-redux";
import HomeFitem from "./HomeFitem";

class HomeF extends Component {
  componentDidMount() {
    this.props.getMessages();
    this.props.getUsers();
  }

  matchIDtoUsername = userId => {
    let user = this.props.userList.find(user => user.id === userId);
    if (user) return user.displayName;
    return "Deleted";
  };

  render() {
    return (
      <Feed>
        {console.log(this.props.messages.messages)}
        {this.props.messages.messages.map(message => (
          <Feed.Event>
            <HomeFitem
              text={message.text}
              userID={this.matchIDtoUsername(message.userId)}
              createdAt={message.createdAt}
            />
          </Feed.Event>
        ))}
      </Feed>
    );
  }
}


const mapStateToProps = state => ({
  messages: state.messages.messages,
  isLoading: state.isLoading,
  userList: state.users.users.users,
  err: state.messages.messageError
})

export default connect(
  mapStateToProps,
  { getMessages, getUsers }
)(HomeF);
