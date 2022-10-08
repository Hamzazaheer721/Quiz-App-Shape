/* eslint-disable react/require-default-props */
import { incrementQuizStep } from "context/actions";
import { QuizDispatchContext } from "context/quiz.context";
import { IScreenProps, withContextData } from "hoc";
import { useHomeScreen } from "hooks";
import { FC, memo, useContext } from "react";
import { HeadingSection } from "./container";

const ScreenLayoutComponent: FC<IScreenProps> = memo(
  ({ currentScreenQuizData }) => {
    const a = useContext(QuizDispatchContext);
    const { renderScreen } = useHomeScreen(currentScreenQuizData);
    return (
      <>
        <HeadingSection currentScreenQuizData={currentScreenQuizData} />
        {renderScreen()}
        <button
          onClick={() => {
            incrementQuizStep(a);
          }}
          type="submit"
        >
          {" "}
          Click me
        </button>
      </>
    );
  },
);

export const ScreenLayout = withContextData(ScreenLayoutComponent);
