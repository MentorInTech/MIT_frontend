import * as React from 'react';

import './sign-up.css';
import { initialState } from './sign-up';
import Page from '../../common/page'
import strings from '../../strings';
import validate from '../../common/utils/validate';

import { SignUpState } from '../../../types';

class SignUp extends React.Component<any, SignUpState> {
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
                    onChange={this.handleChange}
                    onBlur={this.handleFocusOut}
                    name="firstName"
                    placeholder={strings.forms.TEXT_FIRST_NAME}
                    type="text"
                />
                <p className="help is-danger">{this.state.firstNameMessage}</p>
              </div>

              <div className="column is-6 field is-marginless">
                <input
                    className="input"
                    disabled={this.state.awaitServer}
                    onChange={this.handleChange}
                    onBlur={this.handleFocusOut}
                    name="lastName"
                    placeholder={strings.forms.TEXT_LAST_NAME}
                    type="text"
                />
                <p className="help is-danger">{this.state.lastNameMessage}</p>
              </div>

              <div className="column is-12 field is-marginless">
                <input
                    className="input"
                    disabled={this.state.awaitServer}
                    onChange={this.handleChange}
                    onBlur={this.handleFocusOut}
                    name="email"
                    placeholder={strings.forms.TEXT_EMAIL}
                    type="text"
                />
                <p className="help is-danger">{this.state.emailMessage}</p>
              </div>

              <div className="column is-12 field is-marginless">
                <input
                    className="input"
                    disabled={this.state.awaitServer}
                    onChange={this.handleChange}
                    onBlur={this.handleFocusOut}
                    name="password"
                    placeholder={strings.forms.TEXT_PASSWORD}
                    type="password"
                />
                <p className="help is-danger">{this.state.passwordMessage}</p>
              </div>

              <div className="column is-12 field is-marginless">
                <input
                    className="input"
                    disabled={this.state.awaitServer}
                    onChange={this.handleChange}
                    onBlur={this.handleFocusOut}
                    name="confirm"
                    placeholder={strings.forms.TEXT_CONFIRM_PASSWORD}
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
                  {strings.forms.TEXT_CREATE_NEW_ACCOUNT}
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
   * @param event The object describing this focus out event
   */
  private handleFocusOut = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target;
    const blurredOnceStateName = `${target.name}BlurredOnce`;
    const blurredOnce = this.state[blurredOnceStateName]
    if (!blurredOnce) {
      // Don't modify state if not necessary
      this.setState(prevState =>
          ({ ...prevState, [blurredOnceStateName]: true }),
          () => this.updateStateValue(target)
      );
    }
  };

  /**
   * Handles change event for input elements
   *
   * @param event The object describing this focus out event
   */
  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    this.updateStateValue(target);
  };

  /**
   * Update state value for the input element.
   *
   * We use `elementNameBlurredOnce` for UX reasons to make sure we
   * show error message onChange only after the user has entered the
   * input once. This will prevent the form from showing error message
   * as the user types.
   */
  private updateStateValue = (target: HTMLInputElement) => {
    const { name, value } = target;
    const blurredOnce = this.state[`${name}BlurredOnce`];
    const validity = validate(name, value, this.state);

    if (blurredOnce) {
      // Only show as red if user has visited this input before
      target.classList.toggle("is-danger", !validity.isValid);
    } else {
      // Don't dipslay the error message
      validity.message = '';
    }

    this.setState(prevState =>
        ({
          ...prevState,
          [name]: value,
          [`${name}Message`]: validity.message,
          [`${name}Valid`]: validity.isValid
        }),
        this.updateReadyForSubmit
    );
  };

  /**
   * Check for all form control to see if the form is ready for submit.
   */
  private updateReadyForSubmit = () => this.setState({
    readyForSubmit: this.state.confirmValid
        && this.state.emailValid
        && this.state.firstNameValid
        && this.state.lastNameValid
        && this.state.passwordValid
  });
}

export default SignUp;
