/* eslint-disable no-param-reassign */

import { IQuizAction, IQuizActionTypes, MockDataType, QuizType } from "general";
import produce from "immer";

export const quizReducer = (state: QuizType, action: IQuizAction): QuizType => {
  const { type } = action;
  switch (type) {
    case IQuizActionTypes.INCREMENT:
      return produce(state, (draft) => {
        draft.step = state.step + 1;
        return draft;
      });
    case IQuizActionTypes.POPULATE_DATA: {
      const { payload } = action;
      return produce(state, (draft) => {
        draft.data = { ...payload } as MockDataType;
        return draft;
      });
    }
    default:
      return state;
  }
};
