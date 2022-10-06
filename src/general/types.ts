import { FunctionComponent, ReactNode } from "react";

export type RoutesType = {
  path: string;
  Component: FunctionComponent;
  key: string;
};
export interface IErrorBoundryState {
  hasError: boolean;
}

export interface IErrorBoundryProps {
  children?: ReactNode;
}
export interface IDefaultThemeProps {
  color: Record<string, string>;
}

export type MockDataType = {
  first: Record<string, string>;
  second: Record<string, string>;
  third: Record<string, string>;
  fourth: Record<string, string>;
  fifth: Record<string, string>;
};

export type QuizType = {
  step: number;
  data: MockDataType;
};

export enum IQuizActionTypes {
  INCREMENT = "INCEREMENT",
  POPULATE_DATA = "POPULATE_DATA",
}

export interface IQuizAction {
  type: IQuizActionTypes;
  payload?: MockDataType;
}
