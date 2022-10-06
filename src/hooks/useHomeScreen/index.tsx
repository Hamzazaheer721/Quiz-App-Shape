import { useCallback, useContext } from "react";
import { QuizStateContext } from "context/quiz.context";
import {
  FifthScreen,
  FirstScreen,
  FourthScreen,
  SecondScreen,
  ThirdScreen,
} from "components/HomeScreen/container";
import { CURRENT_STEP } from "general";

export const useHomeScreen = () => {
  const { step } = useContext(QuizStateContext);

  const renderScreen = useCallback(() => {
    switch (step) {
      case CURRENT_STEP.FIRST:
        return <FirstScreen />;
      case CURRENT_STEP.SECOND:
        return <SecondScreen />;
      case CURRENT_STEP.THIRD:
        return <ThirdScreen />;
      case CURRENT_STEP.FOURTH:
        return <FourthScreen />;
      case CURRENT_STEP.FIFTH:
        return <FifthScreen />;
      default:
        return <> </>;
    }
  }, [step]);

  return { step, renderScreen };
};
