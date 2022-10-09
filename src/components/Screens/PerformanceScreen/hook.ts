/* eslint-disable import/no-cycle */
import { AnswerPayload, ANSWER_KEYS, QuizDispatchType } from "general";
import { useProceed } from "hooks";
import { MouseEvent } from "react";

export const usePerformanceScreen = (quizDispatch: QuizDispatchType) => {
  const { nextScreen, setAnswer } = useProceed(quizDispatch);

  const dispatchPayloadAndMoveToNextScreen = (value: number) => {
    const payload: AnswerPayload = {
      name: ANSWER_KEYS.PERFORMANCE,
      value: `${value}`,
    };
    setAnswer(payload);
    nextScreen();
  };

  const handleClick = (value: number) => (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    dispatchPayloadAndMoveToNextScreen(value);
  };

  return {
    handleClick,
  };
};
