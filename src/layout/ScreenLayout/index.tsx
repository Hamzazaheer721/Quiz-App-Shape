/* eslint-disable react/require-default-props */
// import { QuestionSection } from "general";
import { IScreenProps, withContextData } from "hoc";
import { useHomeScreen } from "hooks";
import { FC, memo } from "react";
import { HeadingSection } from "./container";

const ScreenLayoutComponent: FC<IScreenProps> = memo(({ quizData }) => {
  const { renderScreen, currentScreenQuizData } = useHomeScreen(quizData);
  return (
    <>
      <HeadingSection currentScreenQuizData={currentScreenQuizData} />
      {renderScreen()}
    </>
  );
});

export const ScreenLayout = withContextData(ScreenLayoutComponent);
