/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import styled from "styled-components";

export const DobScreenWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 3.5rem;
  overflow: hidden;
`;

export const DobScreenChildWrapper = styled.div`
  flex-basis: calc(33.3% - 3.5rem);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > :first-child {
    margin-left: 0;
  }
  font-size: 1.5rem;
`;

export const InputField = styled.input`
  font-size: inherit;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 2rem;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray};
  padding-inline: 2rem;
  padding-block: 0.7rem;
  &::placeholder {
    color: ${({ theme }) => theme.color.white};
  }
`;
