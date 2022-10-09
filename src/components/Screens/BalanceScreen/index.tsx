/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { IScreenProps, withContextData } from "hoc";
import { FC, memo } from "react";
import { BalanceScreenWrapper } from "./index.styled";
import { OptionField } from "./OptionField";

const BalanceScreenComponent: FC<IScreenProps> = memo(
  ({ quizData, currentScreenQuizData, quizDispatch }) => (
    <BalanceScreenWrapper>
      {currentScreenQuizData.content?.value!.map((valueObj) => {
        const { option, text } = valueObj as { option: string; text: string };
        return (
          <OptionField
            key={option}
            option={option}
            text={text}
            quizData={quizData}
            quizDispatch={quizDispatch}
          />
        );
      })}
    </BalanceScreenWrapper>
  ),
);

export const BalanceScreen = withContextData(BalanceScreenComponent);
