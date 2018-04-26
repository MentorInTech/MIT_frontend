import * as React from 'react';

export interface PageFrameProps {
  children: any,
  title: string,
  path?: string
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
  passwordBlurredOnce: boolean,
  password: string,
  passwordMessage: string,
  passwordValid: boolean,
  readyForSubmit: boolean
}

export interface SignInStates {
  awaitServer: boolean,
  email: string,
  emailBlurredOnce: boolean,
  emailMessage: string,
  emailValid: boolean,
  passwordBlurredOnce: boolean,
  password: string,
  passwordMessage: string,
  passwordValid: boolean,
  readyForSubmit: boolean
}
