/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  position: absolute;
`;

export const Container = styled.div`
  max-width: 55%;
  min-height: 60rem;
  background-color: transparent;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-inline: 3rem;
  padding-block: 2.5rem;
  background-color: gray; // remove me later
`;
