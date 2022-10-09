/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-cycle */
import { IScreenProps, withContextData } from "hoc";
import { FC, memo } from "react";
import { Circle } from "styles";
import { usePerformanceScreen } from "./hook";
import { PerformanceScreenWrapper } from "./index.styled";

export const PerformanceScreenComponent: FC<IScreenProps> = memo(
  ({ currentScreenQuizData, quizDispatch }) => {
    const { handleClick } = usePerformanceScreen(quizDispatch);
    return (
      <PerformanceScreenWrapper>
        {currentScreenQuizData.content.value!.map((value_) => {
          const value = value_ as number;
          return (
            <Circle large key={String(value)} onClick={handleClick(value)}>
              {" "}
              {value}
            </Circle>
          );
        })}
      </PerformanceScreenWrapper>
    );
  },
);

export const PerformanceScreen = withContextData(PerformanceScreenComponent);
