/* eslint-disable import/no-cycle */
import { ErrorBoundry } from "components";
import { FC, memo } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "styles";
import QuizProvider from "context/quiz.context";
import { IProvidersProps } from "./types";
import "antd/dist/antd.min.css";

export const Providers: FC<IProvidersProps> = memo(({ children }) => (
  <QuizProvider>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ErrorBoundry>{children}</ErrorBoundry>
    </ThemeProvider>
  </QuizProvider>
));
