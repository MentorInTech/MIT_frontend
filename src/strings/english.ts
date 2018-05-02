import I18n, * as I18nGroups from '../../types/i18n';

/**
 * Maps key to a localised string.
 *
 * If you added a new string, make sure you add the attribute to the I18nGroup interface too
 * so that we force every language file to include all translations.
 */

const errors: I18nGroups.Errors = {
  EMAIL_INVALID: 'Please enter a valid e-mail address',
  FIRST_NAME_MISSING: 'Please enter your first name',
  LAST_NAME_MISSING: 'Please enter your last name',
  PASSWORDS_MUST_MATCH: 'Passwords must match',
  PASSWORD_INCORRECT: 'The password you entered is incorrect',
  PASSWORD_LENGTH_INVALID: 'Password must be between 8 and 64-character long',
  PASSWORD_MISSING: 'Please enter password'
};

const questions: I18nGroups.Questions = {
  FORGOT_PASSWORD: 'Forgot password?',
  FORGOT_YOUR_PASSWORD: 'Forgot your password?'
}

const texts: I18nGroups.Texts = {
  AGREEMENT_STATEMENT: 'By clicking Create account, you agree to the Terms of Use and Privacy Policy.',
  CONFIRM_PASSWORD: 'Confirm password',
  CREATE_NEW_ACCOUNT: 'Create new account',
  EMAIL: 'E-mail',
  FIRST_NAME: 'First name',
  FORGET_PASSWORD: 'Forget Password',
  FORGOT_PASSWORD_INSTRUCTIONS: 'Enter the email address you used when you joined and we’ll send you instructions to reset your password.',
  LAST_NAME: 'Last name',
  LOG_IN: 'Log in',
  PASSWORD: 'Password',
  RESET_PASSWORD: 'Reset password',
  VERIFY_EMAIL: 'Verify e-mail',
  VERIFY_INSTRUCTIONS: 'Please check your email and follow the instructions.',
  WELCOME_TO_MIT: 'Welcome to Mentor In Tech'
};

const english: I18n = { errors, questions, texts };

export default english;
