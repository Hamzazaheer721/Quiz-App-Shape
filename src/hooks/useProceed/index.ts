import { QuizDispatchType } from "general/types";
import { useNextScreen } from "hooks/useNextScreen";
import { useSetAnswer } from "hooks/useSetAnswer";

export const useProceed = (quizDispatch: QuizDispatchType) => {
  const setAnswer = useSetAnswer(quizDispatch);
  const nextScreen = useNextScreen(quizDispatch);
  return {
    setAnswer,
    nextScreen,
  };
};
