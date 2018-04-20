import { ChangeEvent } from 'react';
import * as React from 'react';

import './sign-up.css';
import { initialState, validate } from './sign-up';
import { SignUpStates } from '../../../types';
import Page from '../../common/page';

class SignUp extends React.Component<any, SignUpStates> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  public render() {
    return (
      <Page title="Create new account">
        <div className="container">
          <div id="form-title" className="title">Create your account</div>
          <div className="columns is-centered">
            <div id="form-content" className="columns is-multiline is-centered">
              <div className="column is-6 field is-marginless">
                <input
                    className="input"
                    disabled={this.state.awaitServer}
                    name="firstName"
                    onBlur={this.handleFocusOut}
                    placeholder="First Name"
                    type="text"
                />
                <p className="help is-danger">{this.state.firstNameMessage}</p>
              </div>

              <div className="column is-6 field is-marginless">
                <input
                    className="input"
                    disabled={this.state.awaitServer}
                    name="lastName"
                    onBlur={this.handleFocusOut}
                    placeholder="Last Name"
                    type="text"
                />
                <p className="help is-danger">{this.state.lastNameMessage}</p>
              </div>

              <div className="column is-12 field is-marginless">
                <input
                    className="input"
                    disabled={this.state.awaitServer}
                    name="email"
                    onBlur={this.handleFocusOut}
                    placeholder="E-mail"
                    type="text"
                />
                <p className="help is-danger">{this.state.emailMessage}</p>
              </div>

              <div className="column is-12 field is-marginless">
                <input
                    className="input"
                    disabled={this.state.awaitServer}
                    name="password"
                    onBlur={this.handleFocusOut}
                    placeholder="Password"
                    type="password"
                />
                <p className="help is-danger">{this.state.passwordMessage}</p>
              </div>

              <div className="column is-12 field is-marginless">
                <input
                    className="input"
                    disabled={this.state.awaitServer}
                    name="confirm"
                    onBlur={this.handleFocusOut}
                    placeholder="Confirm password"
                    type="password"
                />
                <p className="help is-danger">{this.state.confirmMessage}</p>
              </div>

              <div className="column is-12 field is-marginless">
                <button
                    className="button is-primary"
                    disabled={!this.state.readyForSubmit || this.state.awaitServer}
                    onClick={this.handleSubmit}
                    type="submit">
                  Create new account
                </button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }

  /**
   * Handles submit action; disables all form controls.
   */
  private handleSubmit = () => this.setState({ awaitServer: true });

  /**
   * Handles focus out events for form input elements.
   *
   * @param event The objectt describing this focus out event
   */
  private handleFocusOut = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const { isValid, message } = validate(
        name, value,
        name === 'confirm' ? this.state.password : ''
    );

    event.target.classList.toggle("is-danger", !isValid);
    this.setState(prevState =>
        ({
          ...prevState,
          [name]: value,
          [`${name}Message`]: message,
          [`${name}Valid`]: isValid,
        }),
        this.updateReadyForSubmit
    );
  };

  /**
   * Check for all form control to see if the form is ready for submit.
   */
  private updateReadyForSubmit = () => {
    this.setState({
      readyForSubmit: this.state.confirmValid
          && this.state.emailValid
          && this.state.firstNameValid
          && this.state.lastNameValid
          && this.state.passwordValid
    })
  };
}

export default SignUp;
