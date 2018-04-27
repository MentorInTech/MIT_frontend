import * as React from 'react';

import './reset-password.css';
import { initialState, resetPassword } from './reset-password';
import InputField from '../../common/forms/input-field'
import PageFrameSingleForm from '../../common/page-frames/single-form'
import strings from '../../strings';
import validate from '../../common/utils/validate';

import { ResetPasswordStates } from '../../../types';

class ResetPassword extends React.Component<any, ResetPasswordStates> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  public render() {
    const formAdditionalInfo = (
      <span>
        Already have an account?&nbsp;
        <a href="/sign-in" className="link has-text-primary">Log in.</a>
      </span>
    );

    return (
      <PageFrameSingleForm
          additionalInfo={formAdditionalInfo}
          formTitle={strings.texts.RESET_PASSWORD}
          path="sign-up"
          title={strings.texts.RESET_PASSWORD}
      >
        <InputField
            disabled={this.state.awaitServer}
            helpMessage={this.state.passwordMessage}
            layoutClassName="column is-12 is-marginless"
            name="password"
            onBlur={this.handleFocusOut}
            onChange={this.handleChange}
            placeholder={strings.texts.PASSWORD}
            type="password"
        />

        <InputField
            disabled={this.state.awaitServer}
            helpMessage={this.state.confirmMessage}
            layoutClassName="column is-12 is-marginless"
            name="confirm"
            onBlur={this.handleFocusOut}
            onChange={this.handleChange}
            placeholder={strings.texts.CONFIRM_PASSWORD}
            type="password"
        />

        <div className="column is-12 field is-marginless">
          <button
              className="button is-primary"
              disabled={!this.state.readyForSubmit || this.state.awaitServer}
              onClick={this.handleSubmit}
              type="submit">
            {strings.texts.RESET_PASSWORD}
          </button>
        </div>
      </PageFrameSingleForm>
    );
  }

  /**
   * Handles submit action; disables all form controls.
   */
  private handleSubmit = () => {
    this.setState({ awaitServer: true }, () => {
      const { password } = this.state;

      resetPassword(password)
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
    readyForSubmit: this.state.confirmValid && this.state.passwordValid
  });
}

export default ResetPassword;
