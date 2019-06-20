import React, { Component } from "react";
import { Card, Grid, Segment } from "semantic-ui-react";
import ProfileCard from "../ProfileCard";
import Navbar from "../Navbar";
import UpdateProfileModal from "../UpdateProfileModal";
import DeleteUser from "../DeleteUser";
import ProfileFeedContainer from "../ProfileFeedContainer";
import WriteKweet from "../WriteKweet";
import Feed from "../Feed";
import { getMessages } from "../../actions";
import { connect } from "react-redux";


class UserProfile extends Component {
  
  forceUpdateHandler(){
    this.forceUpdate();
  };

  componentWillUpdate(nextProps){
    if(this.props.messages !== nextProps.messages)
    {this.forceUpdateHandler()}
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Grid container stackable>
          <Grid.Row />
          <Grid.Row columns={2} style={{ marginTop: "70px" }}>
            <Grid.Column floated="left" width={6}>
              <ProfileCard />
              <Card style={{ margin: "auto", marginTop: "50px" }}>
                {/* This is where profile pictures will go */}
                <UpdateProfileModal />
                <DeleteUser />
              </Card>
              
            </Grid.Column>
            <Grid.Column floated="right" width={10}>
              <Segment>
                <ProfileFeedContainer />
                <WriteKweet />
                <Feed messages={this.props.messages} />
              </Segment>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(
  ({messages}) => ({
    messages: messages.userMessages
  }),
  {getMessages}
)(UserProfile)
