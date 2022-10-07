/* eslint-disable react/require-default-props */
import { IScreenProps, withContextData } from "hoc";
import { useHomeScreen } from "hooks";
import { FC, memo } from "react";
import { HeadingSection } from "./container";

const ScreenLayoutComponent: FC<IScreenProps> = memo(
  ({ currentScreenQuizData }) => {
    const { renderScreen } = useHomeScreen(currentScreenQuizData);
    return (
      <>
        <HeadingSection currentScreenQuizData={currentScreenQuizData} />
        {renderScreen()}
      </>
    );
  },
);

export const ScreenLayout = withContextData(ScreenLayoutComponent);
