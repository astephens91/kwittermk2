import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, RegisterForm } from ".";
import "semantic-ui-css/semantic.min.css";
import HomePage from "./views/HomePage";
import RegisterRedirect from "./views/RegisterRedirect";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/home" render={() => <HomePage />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/register" render={() => <RegisterForm />} />
        <Route exact path="/postreg" render={() => <RegisterRedirect />} />
      </Switch>
    );
  }
}

export default App;
