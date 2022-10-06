import { useCallback, useContext } from "react";
import { QuizStateContext } from "context/quiz.context";
import {
  FifthScreen,
  FirstScreen,
  FourthScreen,
  SecondScreen,
  ThirdScreen,
} from "components/HomeScreen/container";

export const useHomeScreen = () => {
  const { step } = useContext(QuizStateContext);

  const renderScreen = useCallback(() => {
    switch (step) {
      case 1:
        return <FirstScreen />;
      case 2:
        return <SecondScreen />;
      case 3:
        return <ThirdScreen />;
      case 4:
        return <FourthScreen />;
      case 5:
        return <FifthScreen />;
      default:
        return <> </>;
    }
  }, [step]);

  return { step, renderScreen };
};
