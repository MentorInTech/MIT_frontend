import * as React from 'react';

import Page from '../../common/page';

import './sign-up.css'

class SignUp extends React.Component {
  public render() {
    return (
      <Page title="Create new account">
        <div className="container">
          <div id="form-title" className="title">Create your account</div>
          <div className="columns is-centered">
            <div id="form-content" className="columns is-multiline is-centered">
              <div className="column is-6">
                <input className="input" type="text" placeholder="First name" />
              </div>

              <div className="column is-6 field is-marginless">
                <input className="input" type="text" placeholder="Last name" />
              </div>

              <div className="column is-12 field is-marginless">
                <input className="input" type="email" placeholder="Email" />
              </div>

              <div className="column is-12 field is-marginless">
                <input className="input" type="password" placeholder="Password" />
              </div>

              <div className="column is-12 field is-marginless">
                <input className="input" type="password" placeholder="Confirm password" />
              </div>

              <div className="column is-12 field is-marginless">
                <button className="button is-primary">Create new account</button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default SignUp;
