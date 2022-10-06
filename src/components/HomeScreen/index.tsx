/* eslint-disable import/no-cycle */

import { FC, memo } from "react";
import { QuizLayout } from "layout";
import { useFetchAndDispatchQuizData, useHomeScreen } from "hooks";

export const HomeScreen: FC = memo(() => {
  useFetchAndDispatchQuizData();
  const { renderScreen } = useHomeScreen();

  return <QuizLayout>{renderScreen()}</QuizLayout>;
});
