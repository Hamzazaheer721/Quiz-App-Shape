/* eslint-disable import/no-cycle */

import { Info } from "components";
import { HeadingType, ICurrentScreenData } from "general";
import {
  HeadingContainer,
  TitleSection,
} from "layout/ScreenLayout/index.styled";
import { FC } from "react";
import { Circle, Heading } from "styles";

export const HeadingSection: FC<ICurrentScreenData> = ({
  currentScreenQuizData,
}) => (
  <TitleSection>
    {currentScreenQuizData?.headings?.map((headingObj: HeadingType) => {
      const { prefix, suffix, title } = headingObj;
      return (
        <HeadingContainer key={title}>
          {!!prefix && (
            <Circle length={prefix.length} disableHover>
              {prefix}
            </Circle>
          )}
          <Heading>
            {title}
            {!!suffix && <Info title={suffix} />}
          </Heading>
        </HeadingContainer>
      );
    })}
  </TitleSection>
);
