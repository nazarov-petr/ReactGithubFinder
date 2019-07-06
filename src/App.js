import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
    );
    console.log(res.data);
    this.setState({
      users: res.data,
      loading: false
    });
  }
  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
    );
    console.log(res.data);
    this.setState({
      user: res.data,
      loading: false
    });
  };
  clearUsers = () => {
    console.log("clear");
    this.setState({
      users: [],
      loading: false
    });
  };
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
    );
    console.log(res.data);
    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type
      }
    });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" />
          <Alert alert={this.state.alert} />

          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    clearUsers={this.clearUsers}
                    searchUsers={this.searchUsers}
                    showClear={this.state.users.length > 0}
                    setAlert={this.setAlert}
                  />
                  <Users
                    loading={this.state.loading}
                    users={this.state.users}
                  />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" render={props => (<User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading}/>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
