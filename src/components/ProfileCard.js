import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUser } from "../actions";
import ImageCard from "./ImageCard";
import moment from "moment";
import "../index.css"
import ImageUploader from "./uploadImage"

class ProfileCard extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <Card style={{ margin: "auto" }}>
        <Card.Content className="ImageContainer">
          <ImageCard />
          <Card.Meta className="KweetingSince">
          <br></br>
            Kweeting since {moment(this.props.createdAt).format("MMMM DD YYYY")
            }
          </Card.Meta>
          <Card className="FileBioContainer">
            <Card.Content>
              <ImageUploader />
            </Card.Content>
            <Card.Content className="BioContainer">
              <Card.Header as="h3">Bio:</Card.Header>
              <Card.Description className="bioDetails">
                {this.props.about || "No bio provided!"}
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayName: state.users.user.displayName,
    about: state.users.user.about,
    username: state.users.user.username,
    createdAt: state.users.user.createdAt
  };
};

const mapDispatchToProps = dispatch => {
  return { getUser: () => dispatch(getUser()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCard);
