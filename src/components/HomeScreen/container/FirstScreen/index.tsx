/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */

import { IScreenProps, withContextData } from "hoc";
import { FC } from "react";

const FirstScreenComponent: FC<IScreenProps> = (props) => {
  console.info({ props });
  return (
    <>
      <h1>First Screen</h1>
    </>
  );
};

export const FirstScreen = withContextData(FirstScreenComponent);
