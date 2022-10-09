/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable implicit-arrow-linebreak */
import { ChangeEvent, MouseEvent, useCallback, useState } from "react";
import {
  AnswerPayload,
  SHORT_DELAY,
  DOB_ERROR_MESSAGE,
  isValidDay,
  isValidMonth,
  isValidYear,
  normalizeDateStateForContext,
  QuizDispatchType,
} from "general";
import { useSetAnswer, useNextScreen, useErrorToaster } from "hooks";
import { debounce } from "lodash";
import { initialDateState } from "./helper";

export const useDobScreen = (quizDispatch: QuizDispatchType) => {
  const [state, setState] = useState(initialDateState);
  const { day, month, year } = state;

  const setAnswer = useSetAnswer(quizDispatch);
  const nextScreen = useNextScreen(quizDispatch);
  const { showErrorMessage } = useErrorToaster();

  const dispatchValueToState = (name: string, value: string) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const handlerFunction = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatchValueToState(name, value);
    },
    [state],
  );

  const handleChange = debounce(handlerFunction, SHORT_DELAY);

  const updateAnswersAndSteps = useCallback(() => {
    const data: AnswerPayload = normalizeDateStateForContext(state);
    setAnswer(data);
    nextScreen();
  }, [state]);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.stopPropagation();
      let flag = true;
      if (!isValidDay(+day)) {
        showErrorMessage(DOB_ERROR_MESSAGE.INVALID_DAY);
        flag = false;
      }
      if (!isValidMonth(+month)) {
        showErrorMessage(DOB_ERROR_MESSAGE.INVALID_MONTH);
        flag = false;
      }
      if (!isValidYear(+year)) {
        showErrorMessage(DOB_ERROR_MESSAGE.INVALID_YEAR);
        flag = false;
      }
      if (!flag) return;
      updateAnswersAndSteps();
    },
    [state],
  );

  return {
    state,
    handleChange,
    handleClick,
  };
};
