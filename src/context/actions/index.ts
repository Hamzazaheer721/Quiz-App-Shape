import { IQuizAction, IQuizActionTypes } from "general";
import { Dispatch } from "react";

export const incrementQuizStep = (dispatch: Dispatch<IQuizAction>) => {
  dispatch({ type: IQuizActionTypes.INCREMENT });
};
