import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card">
      <div className="card-image">
        <div className="columns">
          <div className="column is-2" />
          <div className="column is-8">
            <div className="image has-text-centered">
              <img src={avatar_url} className="is-rounded" alt={login} />
            </div>
          </div>
          <div className="column is-2" />
        </div>
      </div>
      <div className="card-content">
        <div className="content has-text-centered">
          <h4 className="title is-4">{login}</h4>
          <Link to={`/user/${login}`} className="button is-primary">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
