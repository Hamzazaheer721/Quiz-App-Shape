/* eslint-disable import/no-cycle */
import { useCallback } from "react";
import { ContentTypeAction, ScreensContentType } from "general";
import {
  BalanceScreen,
  CompletionScreen,
  DobScreen,
  PerformanceScreen,
  StressScreen,
  TitleScreen,
} from "components/Screens";

export const useHomeScreen = (currentScreenQuizData: ScreensContentType) => {
  const { content } = currentScreenQuizData || {};

  const renderScreen = useCallback(() => {
    const { type } = content || {};
    switch (type) {
      case ContentTypeAction.DROP_DOWN:
        return <TitleScreen />;
      case ContentTypeAction.DOB_INPUT:
        return <DobScreen />;
      case ContentTypeAction.ROUND_BUTTONS:
        return <PerformanceScreen />;
      case ContentTypeAction.TEXT_AREA:
        return <StressScreen />;
      case ContentTypeAction.OPTIONS:
        return <BalanceScreen />;
      default:
        return <CompletionScreen />;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content?.type]);

  return { renderScreen };
};
