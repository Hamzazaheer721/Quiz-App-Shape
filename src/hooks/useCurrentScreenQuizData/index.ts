import { QuizType, ScreensContentType } from "general";
import { useMemo } from "react";

export const useCurrentScreenQuizData = (quizData: QuizType) => {
  const { step, data } = quizData;

  const currentScreenQuizData = useMemo<ScreensContentType>(() => {
    const currentStep = step - 1;
    return Object.values(data)[currentStep];
  }, [data, step]);

  return {
    currentScreenQuizData,
  };
};
