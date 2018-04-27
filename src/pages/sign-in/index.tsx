import * as React from 'react';

import './sign-in.css';
import { initialState, signIn } from './sign-in';
import InputField from '../../common/forms/input-field'
import PageFrameSingleForm from '../../common/page-frames/single-form'
import strings from '../../strings';
import validate from '../../common/utils/validate';

import { SignInStates } from '../../../types';

class SignIn extends React.Component<any, SignInStates> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  public render() {
    const formAdditionalInfo = (
      <a href="forget-password" className="link has-text-primary">{strings.questions.FORGOT_YOUR_PASSWORD}</a>
    );

    return (
      <PageFrameSingleForm
          additionalInfo={formAdditionalInfo}
          formTitle={strings.texts.WELCOME_TO_MIT}
          path="sign-in"
          title={strings.texts.LOG_IN}
      >
        <InputField
            disabled={this.state.awaitServer}
            helpMessage={this.state.emailMessage}
            inputClassName={this.state.emailBlurredOnce && !this.state.emailValid ? 'is-danger': ''}
            layoutClassName="column is-12 is-marginless"
            name="email"
            onBlur={this.handleFocusOut}
            onChange={this.handleChange}
            placeholder={strings.texts.EMAIL}
            type="text"
        />

        <InputField
            disabled={this.state.awaitServer}
            helpMessage={this.state.passwordMessage}
            inputClassName={this.state.passwordBlurredOnce && !this.state.passwordValid ? 'is-danger': ''}
            layoutClassName="column is-12 is-marginless"
            name="password"
            onBlur={this.handleFocusOut}
            onChange={this.handleChange}
            placeholder={strings.texts.PASSWORD}
            type="password"
        />

        <div className="column is-12 field is-marginless">
          <button
              className="button is-primary"
              disabled={!this.state.readyForSubmit || this.state.awaitServer}
              onClick={this.handleSubmit}
              type="submit">
            {strings.texts.LOG_IN}
          </button>

          {/* render error text if sign in failed */}
          {this.state.signInFailed &&
              <p id="sign-in-forget-password-helper" className={"help is-danger"}>
                {strings.errors.PASSWORD_INCORRECT}.&nbsp;
                <a href="forget-password" className="has-text-danger">
                  <strong>{strings.questions.FORGOT_YOUR_PASSWORD}</strong>
                </a>
              </p>}
          {/* end of error text */}
        </div>
      </PageFrameSingleForm>
    );
  }

  /**
   * Handles submit action; disables all form controls.
   */
  private handleSubmit = () => {
    this.setState({ awaitServer: true }, () => {
      const { email, password } = this.state;

      signIn(email, password)
          .catch(message => {
            console.error(`Sign in failed with message ${message}`);
            this.setState({
              awaitServer: false,
              emailValid: false,
              passwordValid: false,
              signInFailed: true
            });
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

    if (!blurredOnce) {
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
