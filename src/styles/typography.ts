/* eslint-disable consistent-return */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import styled, { css } from "styled-components";

export type CircleType = {
  large?: boolean;
  disableHover?: boolean;
  icon?: boolean;
};

export const Title = styled.span`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 500;
`;

export const Question = styled.span`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 500;
`;

export const Circle = styled.div<CircleType>`
  font-size: 2.5rem;
  border-radius: 50%;
  width: 4rem;
  text-align: center;
  cursor: pointer;
  user-select: none;
  background-color: ${({ theme }) => theme.color.tertiary};
  color: ${({ theme }) => theme.color.secondary};
  ${({ large }) =>
    large &&
    css`
      font-size: 4.5rem;
      width: 5rem;
    `};

  ${({ disableHover, theme: { color } }) =>
    !disableHover &&
    css`
      &:active,
      &:hover {
        background-color: ${color.primary};
      }
    `}

  ${({ icon, theme: { color } }) =>
    icon &&
    css`
      border: 2px solid ${color.primary};
      color: ${color.primary};
      background-color: transparent;
    `}
`;
