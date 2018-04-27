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
  readyForSubmit: false,
  signInFailed: false
};

/**
 * Sign-in - requests authentication token from server.
 *
 * @param email User's email
 * @param password User's password
 * @return A Promise that resolves if the request was sucessful; rejects with reason if failed
 */
export function signIn(email: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const jsonData = { email, password };
      console.group();
      console.log('Sending sign-in request');
      console.log(jsonData);
      console.groupEnd();

      console.log('Faking failure');
      reject('Authentication failed');
    }, 1000);
  });
}
