import React, { Component } from 'react'

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url
    } = this.props.user;
    const loading = this.props.loading
    return (
      <div>
        {name}
      </div>
    )
  }
}
