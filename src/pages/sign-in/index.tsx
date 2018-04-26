import * as React from 'react';

import './sign-in.css';
import { initialState } from './sign-in';
import PageFrame from '../../common/page-frame'
import InputField from '../../common/forms/input-field'
import strings from '../../strings';
import validate from '../../common/utils/validate';

import { SignInStates } from '../../../types';

class SignIn extends React.Component<any, SignInStates> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  public render() {
    return (
      <PageFrame title="Log in" path="sign-in">
        <div className="container">
          <div id="sign-in-form-title" className="title">Welcome to Mentor In Tech</div>
          <div className="columns is-centered">
            <div id="sign-in-form-content" className="columns is-multiline is-centered">
              <InputField
                  disabled={this.state.awaitServer}
                  helpMessage={this.state.emailMessage}
                  layoutClassName="column is-12 is-marginless"
                  name="email"
                  onBlur={this.handleFocusOut}
                  onChange={this.handleChange}
                  placeholder={strings.forms.TEXT_EMAIL}
                  type="text"
              />

              <InputField
                  disabled={this.state.awaitServer}
                  helpMessage={this.state.passwordMessage}
                  layoutClassName="column is-12 is-marginless"
                  name="password"
                  onBlur={this.handleFocusOut}
                  onChange={this.handleChange}
                  placeholder={strings.forms.TEXT_PASSWORD}
                  type="password"
              />

              <div className="column is-12 field is-marginless">
                <button
                    className="button is-primary"
                    disabled={!this.state.readyForSubmit || this.state.awaitServer}
                    onClick={this.handleSubmit}
                    type="submit">
                  {strings.forms.TEXT_LOG_IN}
                </button>
              </div>
            </div>
          </div>

          <div id="forget-password-link" className="has-text-centered">
            <a className="link has-text-primary">Forgot your password?</a>
          </div>
        </div>
      </PageFrame>
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
    readyForSubmit: this.state.emailValid && this.state.passwordValid
  });
}

export default SignIn;
