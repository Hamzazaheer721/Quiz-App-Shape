/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-cycle */

import { IScreenProps, withContextData } from "hoc";
import { FC, memo } from "react";
import { useTitleScreen } from "./hook";
import { Label, SelectField, SelectFieldWrapper } from "./index.styled";

const { Option } = SelectField;

const TitleScreenComponent: FC<IScreenProps> = memo(
  ({ currentScreenQuizData, quizDispatch }) => {
    const { handleChange } = useTitleScreen(quizDispatch);
    return (
      <SelectFieldWrapper>
        <Label>Select</Label>
        <SelectField onChange={handleChange}>
          {currentScreenQuizData?.content?.value!.map((value_) => {
            const value = value_ as string;
            return (
              <Option key={value} value={value}>
                {value}
              </Option>
            );
          })}
        </SelectField>
      </SelectFieldWrapper>
    );
  },
);

export const TitleScreen = withContextData(TitleScreenComponent);
