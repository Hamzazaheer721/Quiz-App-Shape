/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { IScreenProps, withContextData } from "hoc";
import { FC, memo } from "react";

const BalanceScreenComponent: FC<IScreenProps> = memo(({ quizData }) => {
  console.info({ quizData });
  return <> Work Life Balance Screen</>;
});

export const BalanceScreen = withContextData(BalanceScreenComponent);
