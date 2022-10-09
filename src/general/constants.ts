/* eslint-disable @typescript-eslint/naming-convention */
export const CURRENT_STEP = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
};

export enum IQuizActionTypes {
  INCREMENT = "INCEREMENT",
  POPULATE_DATA = "POPULATE_DATA",
  SET_ANSWER = "SET_ANSWER",
}

export enum ContentTypeAction {
  DROP_DOWN = "DROP_DOWN",
  DOB_INPUT = "DOB_INPUT",
  ROUND_BUTTONS = "ROUND_BUTTONS",
  TEXT_AREA = "TEXT_AREA",
  OPTIONS = "OPTIONS",
}

export const DELAY = 1000;
export const SHORT_DELAY = 100;

export const ANSWER_KEYS = {
  TITLE: "title",
  DATE_OF_BIRTH: "date of birth",
  PERFORMANCE: "performance",
  SOURCE_OF_STRESS: "source of stress",
  BALANCE: "balancer",
};

export enum DOB_INPUT_TYPE {
  DAY = "day",
  MONTH = "month",
  YEAR = "year",
}

export const TOASTER_TYPE = {
  SUCCESS: "Sucess",
  ERORR: "error",
  INFO: "info",
  WARNING: "warning",
};

export const DOB_ERROR_MESSAGE = {
  INVALID_DAY: "Day should be within 1-31 range",
  INVALID_MONTH: "Month should be within 1-12 range",
  INVALID_YEAR: "Years from 1920-2006 are valid",
};

export const ERROR_MESSAGE = "SOMETHING WENT WRONG";
