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

export const Heading = styled.span`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 400;
  margin-inline: 1rem;
`;

export const Circle = styled.span<CircleType>`
  display: inline-block;
  height: 3.2rem;
  font-size: 2rem;
  border-radius: 50%;
  width: 3.2rem;
  text-align: center;
  cursor: pointer;
  user-select: none;
  background-color: ${({ theme }) => theme.color.tertiary};
  color: ${({ theme }) => theme.color.secondary};
  border: 2px solid ${({ theme }) => theme.color.tertiary};
  ${({ large }) =>
    large &&
    css`
      font-size: 2.5rem;
      width: 3.6rem;
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
      font-size: 1.1rem;
      font-weight: 700;
      height: 1.5em;
      width: 1.7rem;
      color: ${color.primary};
      background-color: transparent;
    `}
`;
