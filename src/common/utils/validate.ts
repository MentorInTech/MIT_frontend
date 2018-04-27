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
        message = isValid ? '' : strings.errors.PASSWORDS_MUST_MATCH;
      } else {
        isValid = !validator.isEmpty(value);
        message = isValid ? '' : strings.errors.PASSWORD_MISSING;
      }
      break;
    case 'email':
      isValid = validator.isEmail(value);
      message = isValid ? '' : strings.errors.EMAIL_INVALID;
      break;
    case 'firstName':
      isValid = !validator.isEmpty(value);
      message = isValid ? '' : strings.errors.FIRST_NAME_MISSING;
      break;
    case 'lastName':
      isValid = !validator.isEmpty(value);
      message = isValid ? '' : strings.errors.LAST_NAME_MISSING;
      break;
    case 'password':
      isValid = validator.isLength(value, { min: 8, max: 64 });
      message = isValid ? '' : strings.errors.PASSWORD_LENGTH_INVALID;
      break;
  }

  return { isValid, message } ;
};
