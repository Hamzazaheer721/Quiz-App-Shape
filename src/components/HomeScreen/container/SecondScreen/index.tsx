/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */

import { IScreenProps, withContextData } from "hoc";
import { FC } from "react";

export const SecondScreenComponent: FC<IScreenProps> = (props) => {
  console.info({ props });
  return (
    <>
      <h1>Second Screen</h1>
    </>
  );
};
export const SecondScreen = withContextData(SecondScreenComponent);
