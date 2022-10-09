import { useCallback } from "react";
import { incrementQuizStep } from "context/actions";
import { DELAY, QuizDispatchType } from "general";
import { debounce, DebouncedFunc } from "lodash";

export const useNextScreen = (quizDispatch: QuizDispatchType) => {
  const incrementSteps = useCallback(() => {
    incrementQuizStep(quizDispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextScreen: DebouncedFunc<() => void> = debounce(incrementSteps, DELAY);

  return nextScreen;
};
