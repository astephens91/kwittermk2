import React, { Component } from "react";
import { Card, Grid, Segment } from "semantic-ui-react";
import ProfileCard from "../ProfileCard";
import Navbar from "../Navbar";
// import UpdateProfileModal from "../UpdateProfileModal";
import DeleteUser from "../DeleteUser";

export default class UserProfile extends Component {
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
                <DeleteUser />
              </Card>
            </Grid.Column>
            <Grid.Column floated="right" width={10}>
              <Segment>{/* Message feed goes here */}</Segment>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
