import React, { Component } from "react";
import { Container, Form, TextArea, Button } from "semantic-ui-react";
import { handleCreateKweet } from "../actions";
import { connect } from "react-redux";

class WriteKweet extends Component {
  state = {
    kweet: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    if (e.key === "Enter") {
      this.props.handleCreateKweet(this.state.kweet);
      this.setState({ kweet: "" });
    } else {
      this.props.handleCreateKweet(this.state.kweet);
      this.setState({ kweet: "" });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { kweet } = this.state;
    return (
      <React.Fragment>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Field
              style={{
                backgroundColor: "#8D99AE",
                color: "black",
                fontSize: "medium"
              }}
              name="kweet"
              onChange={handleChange}
              id="form-textarea-control-opinion"
              control={TextArea}
              placeholder="Write Kweet..."
              value={kweet}
            />
            <Form.Field
              style={{
                backgroundColor: "#2B2D42",
                color: "white",
                fontSize: "medium"
              }}
              id="form-button-control-public"
              control={Button}
              content="Submit"
            />
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    userID: state.userID
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleCreateKweet: kweet => {
      dispatch(handleCreateKweet(kweet));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteKweet);
