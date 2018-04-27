import { ForgetPasswordStates } from '../../../types';

/**
 * Sign-in - requests authentication token from server.
 *
 * @param email User's email
 * @param password User's password
 * @return A Promise that resolves if the request was sucessful; rejects with reason if failed
 */
export function sendResetPasswordEmail(email: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const jsonData = { email };
      console.group();
      console.log('Sending reset password request');
      console.log(jsonData);
      console.groupEnd();

      console.log('Faking success');
      resolve('Email sent');
    }, 1000);
  });
}

/**
 * Initial state of the sign up page
 */
export const initialState: ForgetPasswordStates = {
  awaitServer: false,
  email: '',
  emailBlurredOnce: false,
  emailMessage: '',
  emailValid: false,
  readyForSubmit: false
};
