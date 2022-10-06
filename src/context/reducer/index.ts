/* eslint-disable no-param-reassign */

import { IQuizAction, IQuizActionTypes, QuizType } from "general";
import produce from "immer";

export const quizReducer = (state: QuizType, action: IQuizAction): QuizType => {
  const { type } = action;
  switch (type) {
    case IQuizActionTypes.INCREMENT:
      return produce(state, (draft) => {
        draft.step = state.step + 1;
        return draft;
      });
    default:
      return state;
  }
};
