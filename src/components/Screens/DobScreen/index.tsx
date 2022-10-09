/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { IScreenProps, withContextData } from "hoc";
import { FC, memo } from "react";

const DobScreenComponent: FC<IScreenProps> = memo(({ quizData }) => {
  console.info({ answers: quizData.answers });
  return <>DOB Screen;</>;
});

export const DobScreen = withContextData(DobScreenComponent);
