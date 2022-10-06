/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */

import { IScreenProps, withContextData } from "hoc";
import { FC } from "react";
import { Circle, Title } from "styles";

const FirstScreenComponent: FC<IScreenProps> = (props) => {
  console.info({ props });
  return (
    <>
      <Title>Title</Title>
      <Circle disableHover icon>
        i
      </Circle>
    </>
  );
};

export const FirstScreen = withContextData(FirstScreenComponent);
