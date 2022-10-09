/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from "styled-components";
import { device } from "styles";

export const OptionFieldWrapper = styled.div`
  display: flex;
  gap: 1rem;
  background-color: ${({ theme }) => theme.color.tertiary};
  color: ${({ theme }) => theme.color.secondary};
  padding: 1rem 2rem;
  width: 80%;
  border-radius: 1.2rem;
  cursor: pointer;
  align-items: center;
  font-size: inherit;

  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    opacity: 0.8;
  }

  @media ${device.desktop1080p} {
    width: 50% !important;
  }
  @media ${device.desktop} {
    width: 50% !important;
  }
`;
