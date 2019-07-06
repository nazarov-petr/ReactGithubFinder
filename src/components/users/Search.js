import React, {useState} from "react";
import PropTypes from "prop-types";
const Search = props => {
  const [text, setText] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    if (text === "") {
      props.setAlert("Please enter something", "danger");
    } else {
      props.searchUsers(text);
      setText('');
    }
  };
  const onClear = event => {
    event.preventDefault();
    props.clearUsers();
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
          {props.showClear && (
            <div className="column is-1">
              <button onClick={onClear} className="button is-secondary">
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
