import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({
  username,
  onClickChat,
  onClickFriends,
  onClickLogin,
  onClickLogout,
  onClickSignup,
  isAuthenticated
}) => {
  const loggedInNav = (
    <nav className="site-nav">
      {username}
      <button onClick={onClickChat}>Users</button>
      <button onClick={onClickFriends}>Resources</button>
      <button onClick={onClickLogout}>Logout</button>
    </nav>
  );

  const loggedOutNav = (
    <nav className="site-nav">
      <button onClick={onClickSignup}>Sign Up</button>
      <button onClick={onClickLogin}>Login</button>
    </nav>
  );

  return (
    <header className="global-header">
      <h1 className="site-name">
        <Link to="/admin/">
          <img src="/images/logo.png" width="100" height="79" />
          <span><b>Cred Auth Manager</b></span>
        </Link>
      </h1>

      {isAuthenticated ? loggedInNav : loggedOutNav}
    </header>
  );
};

Header.propTypes = {
  onClickLogout: PropTypes.func,
  isAuthenticated: PropTypes.bool
};

export default Header;
