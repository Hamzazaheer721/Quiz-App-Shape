/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { Buttons } from "components/Buttons";
import { ANSWER_KEYS } from "general";
import { IScreenProps, withContextData } from "hoc";
import { FC, memo } from "react";
import { Heading } from "styles";
import { useStressScreen } from "./hook";
import { StressScreenWrapper, TextArea } from "./index.styled";

export const StressScreenComponent: FC<IScreenProps> = memo(
  ({ currentScreenQuizData, quizData, quizDispatch }) => {
    const { inputRef, handleClick, handleSkip, handleKeyPress } =
      useStressScreen(quizDispatch);
    return (
      <StressScreenWrapper>
        <Heading skip small>
          Please enter upto 250 characters below
        </Heading>
        <TextArea
          name={ANSWER_KEYS.SOURCE_OF_STRESS}
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
        <Buttons
          skip
          pressEnter
          handleClick={handleClick}
          handleSkipClick={handleSkip}
        />
      </StressScreenWrapper>
    );
  },
);

export const StressScreen = withContextData(StressScreenComponent);
