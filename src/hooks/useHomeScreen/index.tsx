/* eslint-disable import/no-cycle */
import { useCallback, useMemo } from "react";
import { CURRENT_STEP, QuestionSection, QuizType } from "general";
import { FirstScreen } from "components/Screens";

export const useHomeScreen = (quizData: QuizType) => {
  const { step, data } = quizData;

  const currentScreenQuizData = useMemo<QuestionSection>(() => {
    const currentStep = step - 1;
    return Object.values(data)[currentStep];
  }, [data, step]);

  const renderScreen = useCallback(() => {
    switch (step) {
      case CURRENT_STEP.FIRST:
        return <FirstScreen />;
      // case CURRENT_STEP.SECOND:
      //   return <SecondScreen />;
      // case CURRENT_STEP.THIRD:
      //   return <ThirdScreen />;
      // case CURRENT_STEP.FOURTH:
      //   return <FourthScreen />;
      // case CURRENT_STEP.FIFTH:
      //   return <FifthScreen />;
      default:
        return <> </>;
    }
  }, [step]);

  return { step, renderScreen, currentScreenQuizData };
};
