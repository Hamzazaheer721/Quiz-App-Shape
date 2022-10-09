/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-cycle */

import { DateStateType } from "components/Screens/DobScreen/types";
import { AnswerPayload, ANSWER_KEYS } from "general";

export const isValidDay = (day: number) => day >= 1 && day <= 31;

export const isValidMonth = (month: number) => month >= 1 && month <= 12;

export const isValidYear = (year: number) => year >= 1920 && year <= 2006;

export const normalizeDateStateForContext = ({
  day,
  month,
  year,
}: DateStateType): AnswerPayload =>
  // eslint-disable-next-line implicit-arrow-linebreak
  ({
    name: ANSWER_KEYS.DATE_OF_BIRTH,
    value: `${day}/${month}/${year}`,
  } as AnswerPayload);

export const setLocalStorage = (key: string, data: Record<string, string>) =>
  localStorage.setItem(key, JSON.stringify(data));
