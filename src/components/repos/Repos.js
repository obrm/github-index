import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <div className="card all-center">
      <h2>חמשת הריפוז הציבוריים האחרונים:</h2>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
