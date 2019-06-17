import React, { Component } from "react";
import { Segment, Grid, Image, Header } from "semantic-ui-react";
import logo from "../../img/birdlogo.png";
import { Link } from "react-router-dom";

class RegisterRedirect extends Component {
  render() {
    return (
        <React.Fragment>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <Segment style={{margin: "25px"}}>
        <Grid columns={2} stackable textAlign="center">
          <Grid.Column style={{ maxWidth: 350 }}>
            <Image className="birdLogo" size="small" src={logo} alt="" />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" style={{ maxWidth: 350 }}>
            <Header as="h1">Thank You For Registering!</Header>
            <Header as="h2">
              {" "}
              Click <Link to="/">Here</Link> to Log In to Kwitter!
            </Header>
            <br />
          </Grid.Column>
        </Grid>
      </Segment>
      </React.Fragment>
    );
  }
}

export default (RegisterRedirect)
