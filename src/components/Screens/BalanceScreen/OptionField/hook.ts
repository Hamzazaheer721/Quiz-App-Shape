/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
import { notification } from "antd";
import {
  AnswerPayload,
  ANSWER_KEYS,
  BalanceScreenDataPayload,
  CACHED_KEY,
  QuizDispatchType,
  QuizType,
  setLocalStorage,
  SUCCESS_MESSAGE,
} from "general";
import { useProceed } from "hooks";
import { MouseEvent, useCallback } from "react";

export const useOptionField = (
  quizDispatch: QuizDispatchType,
  quizData: QuizType,
) => {
  const { setAnswer, nextScreen } = useProceed(quizDispatch);
  const { answers } = quizData;

  const cacheData = useCallback(
    (value: string) => {
      const draft = structuredClone(answers) as Record<string, string>;
      draft[ANSWER_KEYS.BALANCE] = value;
      setLocalStorage(CACHED_KEY, draft);
    },
    [answers],
  );

  const showSuccessToast = (message: string = SUCCESS_MESSAGE) => {
    notification.success({ message });
  };

  const updateAnswersAndSteps = useCallback(
    (value: string) => {
      cacheData(value);
      const data: AnswerPayload = {
        name: ANSWER_KEYS.BALANCE,
        value,
      };
      setAnswer(data);
      nextScreen();
      showSuccessToast();
    },
    [answers],
  );

  const handleClick = useCallback(
    (payload: BalanceScreenDataPayload) => (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const { option, text } = payload;
      const data = `Option # ${option}: ${text}`;
      updateAnswersAndSteps(data);
    },
    [answers],
  );

  return { handleClick };
};
