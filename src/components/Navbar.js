import React, { Component } from "react";
import { Menu, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutThenGoToLogin as logout } from "../actions";
import logo from "../img/birdlogo.png";
// import UserImage from "./UserImage";
import "../index.css";

const styles = {
  menuStyle: {
    height: "100%",
    color: "white"
  },
  image: {
    width: "50px"
  }
};

class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <React.Fragment>
        <Menu id="bar" className="NavBar">
          <React.Fragment>
            <Link to="/home">
              <Menu.Item>
                <Image src={logo} alt="" style={styles.image} />
              </Menu.Item>
            </Link>
            <Link to="/profile">
              <Menu.Item style={styles.menuStyle}>
                {/* <Image src={this.state.src} size={this.props.size} circular /> */}
                {/* <UserImage src={this.state.src} size={this.props.size} circular/> */}
                Profile
              </Menu.Item>
            </Link>

            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  style={{ backgroundColor: "#ff0000", color: "white" }}
                  /*Logout handler will go here */
                  onClick={this.handleLogout}
                >
                  Logout
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </React.Fragment>
        </Menu>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = {
  logout
};
export default connect(
  ({ auth }) => ({
    login: auth.login
  }),
  mapDispatchToProps
)(Navbar);
