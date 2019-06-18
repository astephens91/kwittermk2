import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Navbar from "../Navbar";
import WriteKweet from "../WriteKweet";
import { connect } from "react-redux";
import { Feed } from "../"
import { getMessages } from "../../actions"

export class HomePage extends Component {
  componentDidMount(){
    this.props.getMessages()
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Grid container stackable>
          <Grid.Row columns={2} style={{ marginTop: "80px" }}>
            <Grid.Column floated="left" width={6}>
              <WriteKweet />
              {console.log(this.props.messages)}
              <Feed messages = {this.props.messages} />
              {/* this is where profilepicture component goes
                        this is where userfeed component goes */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default connect(
  ({messages}) => ({
    messages: messages.messages
  }),
  {getMessages}
)(HomePage)
