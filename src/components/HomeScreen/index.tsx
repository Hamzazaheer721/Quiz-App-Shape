/* eslint-disable import/no-cycle */

import { FC, memo } from "react";
import { QuizLayout } from "layout";
import { useHomeScreen } from "hooks";

export const HomeScreen: FC = memo(() => {
  const { renderScreen } = useHomeScreen();
  return <QuizLayout>{renderScreen()}</QuizLayout>;
});
