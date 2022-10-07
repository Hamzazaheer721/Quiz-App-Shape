/* eslint-disable import/no-cycle */

import { FC, memo } from "react";
import { QuizLayout } from "layout";
import { useFetchAndDispatchQuizData } from "hooks";
import { ScreenLayout } from "layout/ScreenLayout";

export const Home: FC = memo(() => {
  useFetchAndDispatchQuizData();

  return (
    <QuizLayout>
      <ScreenLayout />
    </QuizLayout>
  );
});
