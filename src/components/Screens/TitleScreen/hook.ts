/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-cycle */
import { QuizDispatchType, ANSWER_KEYS, AnswerPayload } from "general";
import { useNextStep } from "hooks";
import { useSetAnswer } from "hooks/useSetAnswer";

export const useTitleScreen = (quizDispatch: QuizDispatchType) => {
  const proceedToNextScreen = useNextStep(quizDispatch);
  const setAnswers = useSetAnswer(quizDispatch);

  const handleChange = (value: unknown) => {
    proceedToNextScreen();
    const payload: AnswerPayload = {
      name: ANSWER_KEYS.TITLE,
      value: value as string,
    };
    setAnswers(payload);
  };

  return { handleChange };
};
