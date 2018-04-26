import { SignInStates } from '../../../types';

/**
 * Initial state of the sign up page
 */
export const initialState: SignInStates = {
  awaitServer: false,
  email: '',
  emailBlurredOnce: false,
  emailMessage: '',
  emailValid: false,
  password: '',
  passwordBlurredOnce: false,
  passwordMessage: '',
  passwordValid: false,
  readyForSubmit: false
};
