import React from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const UserItem = ({user: { login, avatar_url, html_url}}) => {

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={avatar_url} alt={login} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
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
  user: PropTypes.object.isRequired,
}

export default UserItem;
