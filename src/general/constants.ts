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

export const ANSWER_KEYS = {
  TITLE: "title",
  DATE_OF_BIRTH: "date of birth",
  PERFORMANCE: "performance",
  SOURCE_OF_STRESS: "source of stress",
  BALANCE: "balancer",
};
