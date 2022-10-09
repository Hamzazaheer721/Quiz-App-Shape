/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback } from "react";
import { setAnswer } from "context/actions";
import { AnswerPayload, DELAY, QuizDispatchType } from "general";
import { debounce, DebouncedFunc } from "lodash";

export const useSetAnswer = (quizDispatch: QuizDispatchType) => {
  const handleAnswers = useCallback((payload: AnswerPayload) => {
    setAnswer(quizDispatch, payload);
  }, []);

  const setAnswers: DebouncedFunc<(payload: AnswerPayload) => void> = debounce(
    handleAnswers,
    DELAY,
  );

  return setAnswers;
};
