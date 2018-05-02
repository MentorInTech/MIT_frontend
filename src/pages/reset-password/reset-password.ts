import { ResetPasswordStates } from '../../../types';

/**
 * Sends password reset request.
 *
 * @param password User's password
 * @return A Promise that resolves if the request was sucessful; rejects with reason if failed
 */
export function resetPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const jsonData = { password };
    console.group();
    console.log('Sending reset password request');
    console.log(jsonData);
    console.groupEnd();

    console.log('Faking failure');
    setTimeout(() => {
      reject('Failed to reset password');
    }, 1000);
  });
}

/**
 * Initial state of the sign up page
 */
export const initialState: ResetPasswordStates = {
  awaitServer: false,
  confirm: '',
  confirmBlurredOnce: false,
  confirmMessage: '',
  confirmValid: false,
  password: '',
  passwordBlurredOnce: false,
  passwordMessage: '',
  passwordValid: false,
  readyForSubmit: false
};
