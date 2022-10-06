import { FC, memo } from "react";
import { Wrapper, Container } from "./index.styled";
import { IQuizLayoutProps } from "./types";

export const QuizLayout: FC<IQuizLayoutProps> = memo(({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
));
