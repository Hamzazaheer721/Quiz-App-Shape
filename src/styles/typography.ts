/* eslint-disable consistent-return */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import styled, { css } from "styled-components";

export type CircleType = {
  large?: boolean;
  disableHover?: boolean;
  icon?: boolean;
  length?: number;
};

export type HeadingType = {
  small?: boolean;
  skip?: boolean;
};

export const Heading = styled.span<HeadingType>`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 400;
  margin-inline: 1rem;
  ${({ small }) =>
    small &&
    css`
      font-size: 1.5rem;
    `}
  ${({ skip }) =>
    skip &&
    css`
      margin-inline-end: 2rem;
      cursor: pointer;
    `}
`;

export const Description = styled.span`
  font-size: inherit;
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 400;
  margin-inline: 1rem;
`;

export const Button = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.8rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  margin-top: 6rem;
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.color.darkgray};
  color: ${({ theme }) => theme.color.primary};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.darkgray};
    transition: 1s;
  }
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
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 5rem;
      font-size: 3rem;
      height: 5rem;
      background-color: ${({ theme }) => theme.color.lightgray};
      aspect-ratio: 1/1;
      border: none;
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
      vertical-align: middle;
      margin-inline-start: 1rem;
    `}

    ${({ length }) =>
    length &&
    length > 2 &&
    css`
      font-size: 1.5rem;
      line-height: 3rem; // for making font in middle
      font-weight: 400;
    `}
`;

export const Square = styled.span`
  border: none;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.tertiary};
  padding: 0.2rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: inherit;
  cursor: pointer;
  border-radius: 0.8rem;
`;
