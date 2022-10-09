import { incrementQuizStep } from "context/actions";
import { QuizDispatchType } from "general";
import { useCallback } from "react";

export const useNextStep = (quizDispatch: QuizDispatchType) => {
  const triggerNextScreen = useCallback(() => {
    incrementQuizStep(quizDispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return triggerNextScreen;
};
