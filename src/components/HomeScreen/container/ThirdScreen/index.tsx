/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */

import { IScreenProps, withContextData } from "hoc";
import { FC } from "react";

export const ThirdScreenComponent: FC<IScreenProps> = (props) => {
  console.info({ props });
  return (
    <>
      <h1>Third Screen</h1>
    </>
  );
};

export const ThirdScreen = withContextData(ThirdScreenComponent);
