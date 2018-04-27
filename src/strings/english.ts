import I18n, * as I18nGroups from '../../types/i18n';

/**
 * Maps key to a localised string.
 *
 * If you added a new string, make sure you add the attribute to the I18nGroup interface too
 * so that we force every language file to include all translations.
 */

const forms: I18nGroups.Forms = {
  ERROR_EMAIL_INVALID: 'Please enter a valid e-mail address',
  ERROR_FIRST_NAME_MISSING: 'Please enter your first name',
  ERROR_LAST_NAME_MISSING: 'Please enter your last name',
  ERROR_PASSWORD_INCORRECT: 'The password you entered is incorrect',
  ERROR_PASSWORD_LENGTH: 'Password must be between 8 and 64-character long',
  ERROR_PASSWORD_MISMATCH: 'Passwords must match',
  ERROR_PASSWORD_MISSING: 'Please enter password',
  QUESTION_FORGOT_PASSWORD: 'Forgot your password?',
  TEXT_CONFIRM_PASSWORD: 'Confirm password',
  TEXT_CREATE_NEW_ACCOUNT: 'Create new account',
  TEXT_EMAIL: 'E-mail',
  TEXT_FIRST_NAME: 'First name',
  TEXT_LAST_NAME: 'Last name',
  TEXT_LOG_IN: 'Log in',
  TEXT_PASSWORD: 'Password'
};

const general: I18nGroups.General = {
  TEXT_AGREEMENT_STATEMENT: 'By clicking Create account, you agree to the Terms of Use and Privacy Policy.'
};

const english: I18n = { forms, general };

export default english;
