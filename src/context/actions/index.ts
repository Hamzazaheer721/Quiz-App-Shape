import { IQuizAction, IQuizActionTypes, MockDataType } from "general";
import { Dispatch } from "react";

export const incrementQuizStep = (dispatch: Dispatch<IQuizAction>) => {
  dispatch({ type: IQuizActionTypes.INCREMENT });
};

export const populateData = (
  dispatch: Dispatch<IQuizAction>,
  payload: MockDataType,
) => {
  dispatch({ type: IQuizActionTypes.POPULATE_DATA, payload });
};
