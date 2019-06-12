import React, { Component } from "react";
import { Menu, Button, Image } from "semantic-ui-react";
import {Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutThenGoToLogin as logout } from "../actions";
import logo from "../img/birdlogo.png";

class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = () => {
    // this handles the logout
  };

  render() {
  

    return (
      <React.Fragment>
          <Menu id="bar">
            <React.Fragment>
              <Link to="/home">
                <Menu.Item>
                  <Image src={logo} alt="" style={{ width: "50px" }} />
                </Menu.Item>
              </Link>
              <Link to="/profile">
                 <Menu.Item style = {{height: "100%"}}>
                   
                     Profile
                   
                 </Menu.Item>
                </Link>
              <Menu.Menu position="right">

                <Menu.Item>
                  <Button style={{ backgroundColor: "#ff0000", color: "white"}}
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
        ) 

  
    }};
    export default connect(
      ({ auth }) => ({
        login: auth.login,
      }),
      { logout }
    )(Navbar);


