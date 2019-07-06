import React, {useContext} from "react";
import UserItem from "./UserItem";
import Loading from "../layout/Loading";
import GithubContext from '../../context/github/githubContext'

const Users = () => {
  const githubContext = useContext(GithubContext);

  const {users, loading} = githubContext
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

export default Users;
