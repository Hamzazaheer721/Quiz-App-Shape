/* eslint-disable import/no-cycle */
import { QuizDispatchType, QuizType } from "general";
import { FC, memo } from "react";
import { Description, Square } from "styles";
import { useOptionField } from "./hook";
import { OptionFieldWrapper } from "./index.styled";

interface IOptionFieldProps {
  option: string;
  text: string;
  quizDispatch: QuizDispatchType;
  quizData: QuizType;
}
export const OptionField: FC<IOptionFieldProps> = memo(
  ({ option, text, quizData, quizDispatch }) => {
    const { handleClick } = useOptionField(quizDispatch, quizData);
    return (
      <OptionFieldWrapper onClick={handleClick({ option, text })}>
        <Square> {option}</Square>
        <Description>{text}</Description>
      </OptionFieldWrapper>
    );
  },
);
