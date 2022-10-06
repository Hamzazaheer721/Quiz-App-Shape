import { IQuizAction, QuizType } from "general";
import { createContext, Dispatch, ElementType, memo, useReducer } from "react";
import { quizReducer } from "./reducer";

/* Initial State */
export const initialValue = { step: 1 } as QuizType;

/* Contexts */
export const QuizStateContext = createContext<QuizType>(initialValue);
export const QuizDispatchContext = createContext<Dispatch<IQuizAction>>(
  () => {},
);

/* Providers */
const QuizProvider: ElementType = memo(({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialValue);

  return (
    <QuizStateContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  );
});

export default QuizProvider;
