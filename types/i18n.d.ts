export default interface I18n {
  forms: Forms,
  general: General
}

export interface Forms extends I18nGroup {
  ERROR_EMAIL_INVALID: string,
  ERROR_FIRST_NAME_MISSING: string,
  ERROR_LAST_NAME_MISSING: string,
  ERROR_PASSWORD_INCORRECT: string,
  ERROR_PASSWORD_LENGTH: string,
  ERROR_PASSWORD_MISMATCH: string,
  ERROR_PASSWORD_MISSING: string,
  QUESTION_FORGOT_PASSWORD: string,
  TEXT_CONFIRM_PASSWORD: string,
  TEXT_CREATE_NEW_ACCOUNT: string,
  TEXT_EMAIL: string,
  TEXT_FIRST_NAME: string,
  TEXT_LAST_NAME: string,
  TEXT_LOG_IN: string,
  TEXT_PASSWORD: string
}

export interface General extends I18nGroup {
  TEXT_AGREEMENT_STATEMENT: string
}

interface I18nGroup {}
