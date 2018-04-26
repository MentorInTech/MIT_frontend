import * as validator from 'validator';
import strings from '../../strings';

/**
 * Validate a form target and its value.
 *
 * @param target The target to validate
 * @param value The value of the target to validate
 * @param state The current state
 */
export default function validate(name: string, value: string, state: any): { isValid: boolean, message: string} {
  let isValid = false;
  let message = '';

  switch (name) {
    case 'confirm':
      if (value) {
        isValid = state.passwordValid && validator.equals(value, state.password);
        message = isValid ? '' : strings.forms.ERROR_PASSWORD_MISMATCH;
      } else {
        isValid = !validator.isEmpty(value);
        message = isValid ? '' : strings.forms.ERROR_PASSWORD_MISSING;
      }
      break;
    case 'email':
      isValid = validator.isEmail(value);
      message = isValid ? '' : strings.forms.ERROR_EMAIL_INVALID;
      break;
    case 'firstName':
      isValid = !validator.isEmpty(value);
      message = isValid ? '' : strings.forms.ERROR_FIRST_NAME_MISSING;
      break;
    case 'lastName':
      isValid = !validator.isEmpty(value);
      message = isValid ? '' : strings.forms.ERROR_LAST_NAME_MISSING;
      break;
    case 'password':
      isValid = validator.isLength(value, { min: 8, max: 64 });
      message = isValid ? '' : strings.forms.ERROR_PASSWORD_LENGTH;
      break;
  }

  return { isValid, message } ;
};
