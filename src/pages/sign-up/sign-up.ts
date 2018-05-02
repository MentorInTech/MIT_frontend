import { SignUpStates } from '../../../types';

/**
 * Sends sign up request.
 *
 * @param firstName User's first name
 * @param lastName User's last name
 * @param email User's email address
 * @param password User's password
 * @return A Promise that resolves if the request was sucessful; rejects with reason if failed
 */
export function signUp(firstName: string, lastName: string, email: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const jsonData = { firstName, lastName, email, password };
    console.group();
    console.log('Sending sign-up request');
    console.log(jsonData);
    console.groupEnd();

    console.log('Faking failure');
    setTimeout(() => {
      // reject('Failed to sign up');
      resolve('test');
    }, 1000);
  });
}

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
  readyForSubmit: false,
  signUpSucceeded: false
};
