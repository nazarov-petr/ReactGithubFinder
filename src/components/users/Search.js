import React, { Component } from "react";
import PropTypes from "prop-types";
export class Search extends Component {
  state = {
    text: ""
  };
  onSubmit = event => {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "danger");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  onClear = event => {
    event.preventDefault();
    this.props.clearUsers();
  };
  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column  is-10 field">
              <input
                className="input"
                name="text"
                type="text"
                placeholder="Search users"
                value={this.state.text}
                onChange={this.onChange}
              />
            </div>
            <div className="column is-1">
              <button onClick={this.onSubmit} className="button is-primary">
                Search
              </button>
            </div>
            {this.props.showClear && (
              <div className="column is-1">
                <button onClick={this.onClear} className="button is-secondary">
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
