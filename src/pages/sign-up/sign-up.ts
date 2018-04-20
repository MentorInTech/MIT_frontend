import * as validator from 'validator';

import { SignUpStates } from '../../../types';

/**
 * Initial state of the sign up page
 */
export const initialState: SignUpStates = {
  awaitServer: false,
  confirm: '',
  confirmMessage: '',
  confirmValid: false,
  email: '',
  emailMessage: '',
  emailValid: false,
  firstName: '',
  firstNameMessage: '',
  firstNameValid: false,
  lastName: '',
  lastNameMessage: '',
  lastNameValid: false,
  password: '',
  passwordMessage: '',
  passwordValid: false,
  readyForSubmit: false
};

/**
 * Validate a form target and its value.
 *
 * @param target The target to validate
 * @param value The value of the target to validate
 * @param suppl Extra resources to help with validation if applicable
 */
export function validate(target: string, value: string, ...suppl: string[]): { isValid: boolean, message: string} {
  let isValid = false;
  let message = '';

  switch (target) {
    case 'confirm':
      isValid = validator.equals(value, suppl[0]);
      message = isValid ? '' : 'Passwords must match';
      break;
    case 'email':
      isValid = validator.isEmail(value);
      message = isValid ? '' : 'Please enter a valid e-mail address';
      break;
    case 'firstName':
      isValid = !validator.isEmpty(value);
      message = isValid ? '' : 'Please enter your first name';
      break;
    case 'lastName':
      isValid = !validator.isEmpty(value);
      message = isValid ? '' : 'Please enter your last name';
      break;
    case 'password':
      isValid = validator.isLength(value, { min: 8, max: 64 });
      message = isValid ? '' : 'Password must be between 8 and 64-character long';
      break;
  }

  return { isValid, message } ;
};
