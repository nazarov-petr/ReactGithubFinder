import React, {useState, useContext} from "react";
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alerContext';
const Search = props => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const [text, setText] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "danger");
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = event => setText(event.target.value );

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
              value={text}
              onChange={onChange}
            />
          </div>
          <div className="column is-1">
            <button onClick={onSubmit} className="button is-primary">
              Search
            </button>
          </div>
          { githubContext.users.length > 0&& (
            <div className="column is-1">
              <button onClick={githubContext.clearUsers} className="button is-secondary">
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Search;
