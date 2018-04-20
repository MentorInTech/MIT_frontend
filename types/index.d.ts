/* Page component */
export interface PageProps {
  title: string,
  children: any
}

export interface SignUpStates {
  awaitServer: boolean,
  confirm: string,
  confirmMessage: string,
  confirmValid: boolean,
  email: string,
  emailMessage: string,
  emailValid: boolean,
  firstName: string,
  firstNameMessage: string,
  firstNameValid: boolean,
  lastName: string,
  lastNameMessage: string,
  lastNameValid: boolean,
  password: string,
  passwordMessage: string,
  passwordValid: boolean,
  readyForSubmit: boolean
}
