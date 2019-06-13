import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, RegisterForm,UpdateUser } from ".";
import "semantic-ui-css/semantic.min.css";
import HomePage from "./HomePage";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/home" render={() => <HomePage />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/register" render={() => <RegisterForm />} />
        <Route exact path="/updateUser" render={() => <UpdateUser />} />
      </Switch>
    );
  }
}

export default App;
