import React from "react";
import UserItem from "./UserItem";
import Loading from "../layout/Loading";
import PropTypes from "prop-types";

const Users = ({ loading, users }) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          {users.map(user => (
            <div className="column is-3" key={user.login}>
              <UserItem user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool
};
export default Users;
