/* eslint-disable @typescript-eslint/ban-types */
import { QuizDispatchContext, QuizStateContext } from "context/quiz.context";
import { IQuizAction, QuizType } from "general";
import { Dispatch, memo, useContext } from "react";

export interface IScreenProps {
  quizState: QuizType;
  quizDispatch: Dispatch<IQuizAction>;
}

export const withContextData = <T extends IScreenProps>(
  WrappedComponent: React.ComponentType<T>,
) => {
  const ComponentWithTheme = memo((props: Omit<T, keyof IScreenProps>) => {
    const quizState = useContext(QuizStateContext);
    const quizDispatch = useContext(QuizDispatchContext);

    const contextData = { quizState, quizDispatch };

    return <WrappedComponent {...contextData} {...(props as T)} />;
  });

  return ComponentWithTheme;
};
