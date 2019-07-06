import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" />
          <Alert />

          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                  />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
      </AlertState>
    </GithubState>
    
  );
};

export default App;
