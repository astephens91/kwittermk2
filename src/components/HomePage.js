import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Navbar from "./Navbar";
import WriteKweet from "./WriteKweet";
import { connect } from "react-redux";

export class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Grid container stackable>
          <Grid.Row columns={2} style={{ marginTop: "80px" }}>
            <Grid.Column floated="left" width={6}>
              <WriteKweet />
              {this.props.messages.map(message => {
                return (
                  <React.Fragment>
                    <p>{message.userId}</p>
                    <p>{message.createdAt}</p>
                    <p>{message.text}</p>
                    <p>Number of likes: {message.likes.length}</p>
                    {/* <button>Like/Unlike</button> */}
                  </React.Fragment>
                );
              })}
              {/* this is where profilepicture component goes
                        this is where userfeed component goes */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(
  ({messages}) => ({
    messages: messages.messages
  }),
  null
)(HomePage)
