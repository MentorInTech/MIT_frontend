import * as React from 'react';

export interface PageFrameGenericProps {
  children: any,
  path?: string,
  title: string
}

export interface PageFrameSingleFormProps extends PageFrameGenericProps {
  additionalInfo?: any,
  formInstructions?: string,
  formTitle?: string
}

export interface NavbarProps {
  path?: string
}

export interface NavbarStates {
  burgerActive: boolean
}

export interface InputFieldProps {
  disabled?: boolean,
  helpMessage?: string,
  inputClassName?: string,
  layoutClassName?: string,
  name: string,
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  type: string
}

export interface SignUpStates {
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
  password: string,
  passwordBlurredOnce: boolean,
  passwordMessage: string,
  passwordValid: boolean,
  readyForSubmit: boolean,
  signUpSucceeded: boolean
}

export interface SignInStates {
  awaitServer: boolean,
  email: string,
  emailBlurredOnce: boolean,
  emailMessage: string,
  emailValid: boolean,
  password: string,
  passwordBlurredOnce: boolean,
  passwordMessage: string,
  passwordValid: boolean,
  readyForSubmit: boolean,
  signInFailed: boolean
}

export interface ForgetPasswordStates {
  awaitServer: boolean,
  email: string,
  emailBlurredOnce: boolean,
  emailMessage: string,
  emailValid: boolean,
  readyForSubmit: boolean,
  resetEmailSent: boolean
}

export interface ResetPasswordStates {
  awaitServer: boolean,
  confirm: string,
  confirmBlurredOnce: boolean,
  confirmMessage: string,
  confirmValid: boolean,
  password: string,
  passwordBlurredOnce: boolean,
  passwordMessage: string,
  passwordValid: boolean,
  readyForSubmit: boolean
}
