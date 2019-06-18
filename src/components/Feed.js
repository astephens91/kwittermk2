import React, { Component } from "react";
import { FeedMessage } from ".";

class Feed extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.messages.map((message, index) => {
          return (
            <FeedMessage
              key={index}
              userId={message.userId}
              createdAt={message.createdAt}
              text={message.text}
              likes={message.likes.length}
            />
          )
        })}
        
      </React.Fragment>
    );
  }
}

export default Feed;
