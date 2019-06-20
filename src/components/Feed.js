import React, { Component } from "react";
import { FeedMessage } from ".";
import {getMessages} from "../actions"

class Feed extends Component {
   

  render() {
  
  

    // console.log(this.props.messages)
    return (
      <React.Fragment>
       {this.props.messages.map((message) => {
          if(message !== undefined){
          return (
            <FeedMessage
              key={message.id}
              userId={message.userId}
              createdAt={message.createdAt}
              text={message.text}
              likes={message.likes.length}
              messageid={message.id}
            />
          )}
        })}
      </React.Fragment>
    );
  }
}

export default Feed;
