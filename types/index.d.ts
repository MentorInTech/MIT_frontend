/* Page component */
export interface PageProps {
  title: string,
  children: any
}

export interface SignUpState {
  awaitServer: boolean,
  confirm: string,
  confirmBlurredOnce: boolean,
  confirmMessage: string,
  confirmValid: boolean,
  email: string,
  emailBlurredOnce: boolean,
  emailMessage: string,
  emailValid: boolean,
  firstName: string,
  firstNameBlurredOnce: boolean,
  firstNameMessage: string,
  firstNameValid: boolean,
  lastName: string,
  lastNameBlurredOnce: boolean,
  lastNameMessage: string,
  lastNameValid: boolean,
  passwordBlurredOnce: boolean,
  password: string,
  passwordMessage: string,
  passwordValid: boolean,
  readyForSubmit: boolean
}
