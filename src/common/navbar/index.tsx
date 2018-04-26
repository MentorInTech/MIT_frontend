import * as React from 'react';

import './navbar.css';

import { NavbarProps, NavbarStates } from '../../../types';

class Navbar extends React.Component<NavbarProps, NavbarStates> {
  public constructor(props: NavbarProps) {
    super(props);
    this.state = { burgerActive: false };
  }

  public render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item has-text-weight-bold is-size-5" href="/">Mentor In Tech</a>

            <a
                aria-expanded="false"
                aria-label="menu"
                className={"navbar-burger has-text-grey-dark" + (this.state.burgerActive ? ' is-active': '')}
                onClick={this.handleClick}
                role="button"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="nav-menu" className={"navbar-menu" + (this.state.burgerActive ? ' is-active': '')}>
            <div className="navbar-end">
              <a className="navbar-item is-size-6">Find a mentor</a>
              <a className="navbar-item is-size-6">Become a mentor</a>
              <a className="navbar-item is-size-6" href="/sign-up">Sign up</a>
              <a className="navbar-item is-size-6" href="/sign-in">Log in</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  private handleClick = (event: React.MouseEvent<HTMLElement>) =>
      this.setState({ burgerActive: !this.state.burgerActive })
}

export default Navbar;
