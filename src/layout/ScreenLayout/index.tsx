/* eslint-disable react/require-default-props */

import { IScreenProps, withContextData } from "hoc";
import { useHomeScreen } from "hooks";
import { FC, memo } from "react";
import { HeadingSection } from "./container";
import { ScreenBodyContainer } from "./index.styled";

const ScreenLayoutComponent: FC<IScreenProps> = memo(
  ({ currentScreenQuizData }) => {
    const { renderScreen } = useHomeScreen(currentScreenQuizData);
    return (
      <>
        <HeadingSection currentScreenQuizData={currentScreenQuizData} />
        <ScreenBodyContainer>{renderScreen()}</ScreenBodyContainer>
      </>
    );
  },
);

export const ScreenLayout = withContextData(ScreenLayoutComponent);
