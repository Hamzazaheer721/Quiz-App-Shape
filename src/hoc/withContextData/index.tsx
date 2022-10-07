/* eslint-disable @typescript-eslint/ban-types */
import { QuizDispatchContext, QuizStateContext } from "context/quiz.context";
import { IQuizAction, QuizType, ScreensContentType } from "general";
import { useCurrentScreenQuizData } from "hooks";
import { Dispatch, memo, useContext } from "react";

export interface IScreenProps {
  quizData: QuizType;
  quizDispatch: Dispatch<IQuizAction>;
  currentScreenQuizData: ScreensContentType;
}

export const withContextData = <T extends IScreenProps>(
  WrappedComponent: React.ComponentType<T>,
) => {
  const ComponentWithTheme = memo((props: Omit<T, keyof IScreenProps>) => {
    const quizState = useContext(QuizStateContext);
    const quizDispatch = useContext(QuizDispatchContext);

    const { currentScreenQuizData } = useCurrentScreenQuizData(quizState);

    const contextData = {
      quizDispatch,
      quizData: quizState,
      currentScreenQuizData,
    };

    return <WrappedComponent {...contextData} {...(props as T)} />;
  });

  return ComponentWithTheme;
};
