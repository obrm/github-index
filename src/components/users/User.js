import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, repos, getUsersRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUsersRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-dark" style={{ marginRight: '2rem' }}>
        חזרה לחיפוש
      </Link>
      <div className="m-2">
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt="avatar"
              style={{ width: '150px' }}
            />
            <h2>{name}</h2>
            <p>מיקום: {location}</p>
          </div>
          <div className="all-center">
            {bio && (
              <Fragment>
                <h3 className="text-center">אודות</h3>
                <p dir="ltr">{bio}</p>
              </Fragment>
            )}
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>שם משתמש:</strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>חברה:</strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>אתר: </strong>
                    <a dir="ltr" href={blog} target="_blank" rel="noreferrer">
                      {blog}
                    </a>
                  </Fragment>
                )}
              </li>
              <li>
                {hireable !== null && (
                  <Fragment>
                    <strong>פנוי להעסקה: </strong>
                    {hireable ? (
                      <i className="fas fa-check text-success" />
                    ) : (
                      <i className="fas fa-time-circle text-danger" />
                    )}
                  </Fragment>
                )}
              </li>
            </ul>
            <a
              href={html_url}
              className="btn btn-success my-1"
              target="_blank"
              rel="noreferrer"
            >
              מעבר לפרופיל בגיטהאב
            </a>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-dark">עוקבים: {followers}</div>
          <div className="badge badge-success">עוקב אחרי: {following}</div>
          <div className="badge badge-info">ריפוז ציבוריים: {public_repos}</div>
          <div className="badge badge-light">
            גיסטים ציבוריים: {public_gists}
          </div>
        </div>
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

export default User;
