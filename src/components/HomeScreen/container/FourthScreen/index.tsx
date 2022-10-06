/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */

import { IScreenProps, withContextData } from "hoc";
import { FC } from "react";

export const FourthScreenComponent: FC<IScreenProps> = (props) => {
  console.info({ props });
  return (
    <>
      <h1>Fourth Screen</h1>
    </>
  );
};

export const FourthScreen = withContextData(FourthScreenComponent);
