import { I18n, I18nGroup } from '../../types/i18n';

const forms: I18nGroup = {
  ERROR_EMAIL_INVALID: 'Please enter a valid e-mail address',
  ERROR_FIRST_NAME_MISSING: 'Please enter your first name',
  ERROR_LAST_NAME_MISSING: 'Please enter your last name',
  ERROR_PASSWORD_LENGTH: 'Password must be between 8 and 64-character long',
  ERROR_PASSWORD_MISMATCH: 'Passwords must match',
  ERROR_PASSWORD_MISSING: 'Please enter password',
  TEXT_CONFIRM_PASSWORD: 'Confirm password',
  TEXT_CREATE_NEW_ACCOUNT: 'Create new account',
  TEXT_EMAIL: 'E-mail',
  TEXT_FIRST_NAME: 'First name',
  TEXT_LAST_NAME: 'Last name',
  TEXT_LOG_IN: 'Log in',
  TEXT_PASSWORD: 'Password'
};

const english: I18n = { forms };

export default english;
