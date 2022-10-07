import { FunctionComponent, ReactNode } from "react";
import { ContentTypeAction, IQuizActionTypes } from "./constants";

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

export type HeadingsType = {
  headings: Array<HeadingType>;
};

export type OptionsValueType = {
  option: string;
  text: string;
};

export type ContentType = {
  content: {
    type: ContentTypeAction;
    value?: [number] | [OptionsValueType];
  };
};

export type ButtonsInclusionType = {
  buttons: boolean;
};

export type ScreensContentType = Key &
  HeadingsType &
  ContentType &
  ButtonsInclusionType;

export type MockDataType = {
  first: ScreensContentType;
  second: ScreensContentType;
  third: ScreensContentType;
  fourth: ScreensContentType;
  fifth: ScreensContentType;
};

export type QuizType = {
  step: number;
  data: MockDataType;
};

export interface IQuizAction {
  type: IQuizActionTypes;
  payload?: MockDataType;
}

export interface ICurrentScreenData {
  currentScreenQuizData: ScreensContentType;
}
