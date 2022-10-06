import { IQuizAction, IQuizActionTypes } from "general";
import { Dispatch } from "react";
import { MockDataType } from "general/types";

export const incrementQuizStep = (dispatch: Dispatch<IQuizAction>) => {
  dispatch({ type: IQuizActionTypes.INCREMENT });
};

export const populateData = (
  dispatch: Dispatch<IQuizAction>,
  payload: MockDataType,
) => {
  dispatch({ type: IQuizActionTypes.POPULATE_DATA, payload });
};
