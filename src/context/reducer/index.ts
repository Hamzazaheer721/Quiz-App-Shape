/* eslint-disable no-param-reassign */
import produce from "immer";
import {
  IQuizAction,
  IQuizActionTypes,
  MockDataType,
  QuizType,
  AnswerPayload,
} from "general";

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
    case IQuizActionTypes.SET_ANSWER: {
      const { payload } = action;
      const { name, value } = payload as AnswerPayload;
      return produce(state, (draft) => {
        draft.answers[name] = value;
        return draft;
      });
    }
    default:
      return state;
  }
};
