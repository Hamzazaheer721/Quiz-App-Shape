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

type Key = {
  _id: string;
};

export type HeadingType = {
  prefix: string;
  title: string;
  suffix: string;
};

export type QuestionSection = Key & {
  headings: Array<HeadingType>;
};

export type MockDataType = {
  first: QuestionSection;
  second: any;
  third: any;
  fourth: any;
  fifth: any;
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

export interface ICurrentScreenData {
  currentScreenQuizData: QuestionSection;
}
