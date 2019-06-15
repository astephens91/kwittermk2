import React, { Component } from "react";
import ostrichAvatar from "../img/ostrichAvatar.png";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import { domain } from "../actions/constants/index";

class UserImage extends Component {
  imgMounted = false;
  state = { src: ostrichAvatar };
  componentDidMount() {
    this.imgMounted = true;
    fetch(`${domain}/users/${this.props.userId}/picture`).then(response => {
      if (this.imgMounted && response.ok && response.status !== 404) {
        this.setState({
          src: `${domain}/users/${this.props.userId}/picture`
        });
      }
    });
  }
  componentWillMount() {
    this.imgMounted = false;
  }

  static getStateFromProps(props) {
    if (props.imageTimestamp === "" || props.imageTimestamp === "undefined") {
      return null;
    } else {
      return {
        src: `${domain}/users/${props.userId}/picture${props.imageTimestamp}`
      };
    }
  }
  render() {
    return <Image src={this.state.src} size={this.props.size} circular />;
  }
}

const mapStateToProps = state => {
  return {
    imageTimestamp: state.users.imageTimestamp
  };
};

export default connect(
  mapStateToProps,
  null
)(UserImage);

