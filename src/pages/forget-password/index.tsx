import * as React from 'react';

import './forget-password.css';
import { initialState, sendResetPasswordEmail } from './forget-password';
import InputField from '../../common/forms/input-field'
import PageFrameSingleForm from '../../common/page-frames/single-form';
import ForgetPasswordResetEmailSent from './forget-password-reset-email-sent';
import strings from '../../strings';
import validate from '../../common/utils/validate';

import { ForgetPasswordStates } from '../../../types';

class ForgetPassword extends React.Component<any, ForgetPasswordStates> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  public render() {
    /**
     * Re-render with ForgetPasswordResetEmailSent view
     *
     * This is a very naive setup just to make sure the Reset Email page is
     * never directly accessible (it could be, but may confuse user if the user
     * bookmarked it).
     *
     * TODO Separate the forget password form into its own file and import it.
     */
    if (this.state.resetEmailSent) {
      return <ForgetPasswordResetEmailSent />;
    }

    // Regular page load on /forget-password endpoint
    const formAdditionalInfo = (
      <span>
        Already have an account?&nbsp;
        <a href="/sign-in" className="link has-text-primary">Log in.</a>
      </span>
    );

    return (
      <PageFrameSingleForm
          additionalInfo={formAdditionalInfo}
          formInstructions={strings.texts.FORGOT_PASSWORD_INSTRUCTIONS}
          formTitle={strings.questions.FORGOT_PASSWORD}
          path="sign-in"
          title={strings.texts.FORGET_PASSWORD}
      >
        <InputField
            disabled={this.state.awaitServer}
            helpMessage={this.state.emailMessage}
            layoutClassName="column is-12 is-marginless"
            name="email"
            onBlur={this.handleFocusOut}
            onChange={this.handleChange}
            placeholder={strings.texts.EMAIL}
            type="text"
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
      const { email } = this.state;

      sendResetPasswordEmail(email)
          .then(message => {
            console.log(`Reset email sent with message ${message}`);
            this.setState({ resetEmailSent: true });
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
    readyForSubmit: this.state.emailValid
  });
}

export default ForgetPassword;
