import { SignUpStates } from '../../../types';

/**
 * Initial state of the sign up page
 */
export const initialState: SignUpStates = {
  awaitServer: false,
  confirm: '',
  confirmBlurredOnce: false,
  confirmMessage: '',
  confirmValid: false,
  email: '',
  emailBlurredOnce: false,
  emailMessage: '',
  emailValid: false,
  firstName: '',
  firstNameBlurredOnce: false,
  firstNameMessage: '',
  firstNameValid: false,
  lastName: '',
  lastNameBlurredOnce: false,
  lastNameMessage: '',
  lastNameValid: false,
  password: '',
  passwordBlurredOnce: false,
  passwordMessage: '',
  passwordValid: false,
  readyForSubmit: false
};
