import React, { Component } from "react";
import { FeedMessage } from ".";

class Feed extends Component {
   

  render() {
  
    let messages = this.props.messages.filter(message => {
      return message !== undefined;
    });

    return (
      <React.Fragment>
       {messages.map((message) => {
          
          return(
            <FeedMessage
              key={message.id}
              userId={message.userId}
              createdAt={message.createdAt}
              text={message.text}
              likes={message.likes.length}
              messageid={message.id}
          />
          
       )})}
      </React.Fragment>
    );
  }
}

export default Feed;
