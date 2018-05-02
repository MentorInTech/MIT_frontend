export default interface I18n {
  errors: Errors,
  questions: Questions,
  texts: Texts
}

export interface Errors extends I18nGroup {
  EMAIL_INVALID: string,
  FIRST_NAME_MISSING: string,
  LAST_NAME_MISSING: string,
  PASSWORDS_MUST_MATCH: string,
  PASSWORD_INCORRECT: string,
  PASSWORD_LENGTH_INVALID: string,
  PASSWORD_MISSING: string
}

export interface Texts extends I18nGroup {
  AGREEMENT_STATEMENT: string,
  CONFIRM_PASSWORD: string,
  CREATE_NEW_ACCOUNT: string,
  EMAIL: string,
  FIRST_NAME: string,
  FORGET_PASSWORD: string,
  FORGOT_PASSWORD_INSTRUCTIONS: string,
  LAST_NAME: string,
  LOG_IN: string,
  PASSWORD: string,
  RESET_PASSWORD: string,
  VERIFY_EMAIL: string,
  VERIFY_INSTRUCTIONS: string,
  WELCOME_TO_MIT: string
}

export interface Questions extends I18nGroup {
  FORGOT_PASSWORD: string,
  FORGOT_YOUR_PASSWORD: string,
}

interface I18nGroup {}
