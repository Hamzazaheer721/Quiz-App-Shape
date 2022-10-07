/* eslint-disable import/no-cycle */
import { useCallback } from "react";
import { ContentTypeAction, QuizType, ScreensContentType } from "general";
import { FirstScreen } from "components/Screens";

export const useHomeScreen = (
  quizData: QuizType,
  currentScreenQuizData: ScreensContentType,
) => {
  const { step } = quizData;

  const {
    content: { type },
  } = currentScreenQuizData;

  const renderScreen = useCallback(() => {
    switch (type) {
      case ContentTypeAction.DROP_DOWN:
        return <FirstScreen />;
      case ContentTypeAction.DOB_INPUT:
        return <FirstScreen />;
      case ContentTypeAction.ROUND_BUTTONS:
        return <FirstScreen />;
      case ContentTypeAction.TEXT_AREA:
        return <FirstScreen />;
      case ContentTypeAction.OPTIONS:
        return <FirstScreen />;
      default:
        return <> </>;
    }
  }, [type]);

  return { step, renderScreen };
};
