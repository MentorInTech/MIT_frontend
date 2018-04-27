import * as React from 'react';

import './sign-up.css';
import { initialState, signUp } from './sign-up';
import PageFrame from '../../common/page-frame'
import InputField from '../../common/forms/input-field'
import strings from '../../strings';
import validate from '../../common/utils/validate';

import { SignUpStates } from '../../../types';

class SignUp extends React.Component<any, SignUpStates> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  public render() {
    return (
      <PageFrame title="Create new account" path="sign-up">
        <div className="container">
          <div id="sign-up-form-title" className="title">Create your account</div>
          <div className="columns is-centered">
            <div id="sign-up-form-content" className="columns is-multiline is-centered">
              <InputField
                  disabled={this.state.awaitServer}
                  helpMessage={this.state.firstNameMessage}
                  layoutClassName="column is-6 is-marginless"
                  name="firstName"
                  onBlur={this.handleFocusOut}
                  onChange={this.handleChange}
                  placeholder={strings.forms.TEXT_FIRST_NAME}
                  type="text"
              />

              <InputField
                  disabled={this.state.awaitServer}
                  helpMessage={this.state.lastNameMessage}
                  layoutClassName="column is-6 is-marginless"
                  name="lastName"
                  onBlur={this.handleFocusOut}
                  onChange={this.handleChange}
                  placeholder={strings.forms.TEXT_LAST_NAME}
                  type="text"
              />

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

              <InputField
                  disabled={this.state.awaitServer}
                  helpMessage={this.state.confirmMessage}
                  layoutClassName="column is-12 is-marginless"
                  name="confirm"
                  onBlur={this.handleFocusOut}
                  onChange={this.handleChange}
                  placeholder={strings.forms.TEXT_CONFIRM_PASSWORD}
                  type="password"
              />

              <div className="column is-12 field is-marginless">
                <button
                    className="button is-primary"
                    disabled={!this.state.readyForSubmit || this.state.awaitServer}
                    onClick={this.handleSubmit}
                    type="submit">
                  {strings.forms.TEXT_CREATE_NEW_ACCOUNT}
                </button>
                <p id="sign-up-agreement" className="help has-text-grey-light">{strings.general.TEXT_AGREEMENT_STATEMENT}</p>
              </div>
            </div>
          </div>
        </div>
      </PageFrame>
    );
  }

  /**
   * Handles submit action; disables all form controls.
   */
  private handleSubmit = () => {
    this.setState({ awaitServer: true }, () => {
      const { firstName, lastName, email, password } = this.state;

      signUp(firstName, lastName, email, password)
          .then()
          .catch(err => {
            console.error(err);
            this.setState({ awaitServer: false });
          });
    });
  };

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
