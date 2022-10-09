/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from "styled-components";
import { device } from "styles";

export const TextArea = styled.textarea`
  box-sizing: border-box;
  display: flex;
  margin-block: 2rem;
  font-size: 1.5rem;
  resize: none;
  outline: none;
  border: none;
  border-radius: 1.5rem;
  width: 100%;
  min-height: 14rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray};
  padding-inline: 2rem;
  padding-block: 0.7rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.white};
  }

  @media ${device.desktop1080p} {
    width: 50% !important;
  }
  @media ${device.desktop} {
    width: 50% !important;
  }
  @media ${device.laptop} {
    width: 50% !important;
  }
`;

export const StressScreenWrapper = styled.div``;
