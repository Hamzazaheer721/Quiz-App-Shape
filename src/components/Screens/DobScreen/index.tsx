/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { Buttons } from "components/Buttons";
import { IScreenProps, withContextData } from "hoc";
import { FC, memo } from "react";
import { Heading } from "styles";
import { useDobScreen } from "./hook";
import {
  DobScreenChildWrapper,
  DobScreenWrapper,
  InputField,
} from "./index.styled";

const DobScreenComponent: FC<IScreenProps> = memo(({ quizDispatch }) => {
  const { handleChange, handleClick } = useDobScreen(quizDispatch);
  return (
    <>
      <DobScreenWrapper>
        <DobScreenChildWrapper>
          <Heading>Day</Heading>
          <InputField
            type="number"
            placeholder="DD"
            name="day"
            onChange={handleChange}
          />
        </DobScreenChildWrapper>
        <DobScreenChildWrapper>
          <Heading>Month</Heading>
          <InputField
            type="number"
            placeholder="MM"
            name="month"
            onChange={handleChange}
          />
        </DobScreenChildWrapper>
        <DobScreenChildWrapper>
          <Heading>Year</Heading>
          <InputField
            type="number"
            placeholder="YYYY"
            name="year"
            onChange={handleChange}
          />
        </DobScreenChildWrapper>
      </DobScreenWrapper>
      <Buttons handleClick={handleClick} pressEnter />
    </>
  );
});

export const DobScreen = withContextData(DobScreenComponent);
