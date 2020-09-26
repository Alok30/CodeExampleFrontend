import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import About from "./About";
import Home from "../containers/Home";
import PageNotFound from "./PageNotFound";
import LoginForm from "./LoginForm";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
  
    return (
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/" exact component={LoginForm} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/Home" exact component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    );
  }
}
export default App;
