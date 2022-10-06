/* eslint-disable import/no-cycle */
import { ErrorBoundry } from "components";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import QuizProvider from "context/quiz.context";
import { defaultTheme, GlobalStyle } from "styles";
import { IProvidersProps } from "./types";
import "antd/dist/antd.min.css";

export const Providers: FC<IProvidersProps> = ({ children }) => (
  <QuizProvider>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ErrorBoundry>{children}</ErrorBoundry>
    </ThemeProvider>
  </QuizProvider>
);
