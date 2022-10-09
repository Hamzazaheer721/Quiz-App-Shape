import { FC, memo, MouseEvent } from "react";
import { Button, Heading } from "styles";
import { ButtonsWrapper } from "./index.styled";

interface IButtonProps {
  handleClick: (e: MouseEvent<HTMLAnchorElement>) => void;
  pressEnter?: boolean;
  skip?: boolean;
  handleSkipClick?: (e: MouseEvent<HTMLSpanElement>) => void;
}

export const Buttons: FC<IButtonProps> = memo(
  ({ handleClick, skip, pressEnter, handleSkipClick }) => (
    <ButtonsWrapper>
      {skip && (
        <Heading small skip onClick={handleSkipClick}>
          {" "}
          Skip
        </Heading>
      )}
      <Button onClick={handleClick}>OK</Button>
      {pressEnter && <Heading small>or Press Enter</Heading>}
    </ButtonsWrapper>
  ),
);
