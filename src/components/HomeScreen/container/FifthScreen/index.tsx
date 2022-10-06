/* eslint-disable react/jsx-no-useless-fragment */

import { IScreenProps, withContextData } from "hoc";
import { FC } from "react";

/* eslint-disable arrow-body-style */
export const FifthScreenComponent: FC<IScreenProps> = (props) => {
  console.info({ props });
  return (
    <>
      <h1>Fifth Screen</h1>
    </>
  );
};

export const FifthScreen = withContextData(FifthScreenComponent);
