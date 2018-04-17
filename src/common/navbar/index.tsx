import * as React from 'react';

import './navbar.css';

class Navbar extends React.Component {
  public render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item has-text-weight-bold is-size-5">Mentor In Tech</div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start" />
            <div className="navbar-end">
              <a className="navbar-item is-size-6">Find a mentor</a>
              <a className="navbar-item is-size-6">Become a mentor</a>
              <a className="navbar-item is-size-6">Sign up</a>
              <a className="navbar-item is-size-6">Log in</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
