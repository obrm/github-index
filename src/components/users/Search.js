import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { users, searchUsers, clearUsers } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = async e => {
    e.preventDefault();
    if (text === '') {
      setAlert('נא למלא את שדה החיפוש', 'warning');
    } else {
      const res = await searchUsers(text);
      setText('');

      if (res.length === 0) {
        setAlert('לא נמצאו תוצאות לחיפוש! יש לנסות שוב.', 'danger', 2.5);
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="חיפוש משתמשים..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="חיפוש" className="btn-success btn-block" />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          style={{
            border: '1px solid rgb(199 191 191)',
            marginRight: '0px',
            height: '27px',
            lineHeight: '14px',
          }}
        >
          ניקוי
        </button>
      )}
    </div>
  );
};

export default Search;
