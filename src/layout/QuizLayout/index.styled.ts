/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  position: absolute;
`;

export const Container = styled.div`
  max-width: 60%;
  min-height: 70rem;
  background-color: transparent;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
