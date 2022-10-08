/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from "styled-components";
import { device } from "styles";

export const Wrapper = styled.div`
  padding: 20rem 0;
  max-height: 100vh;
  width: 100%;
  overflow: auto;
`;

export const Container = styled.div`
  max-width: 55%;
  margin: 0 auto;
  background-color: transparent;
  padding-inline: 3rem;
  padding-block: 2.5rem;
  background-color: gray; // remove me later

  @media ${device.tablet} {
    max-width: 80%;
  }

  @media ${device.mobile} {
    max-width: 90%;
  }

  @media ${device.tiny} {
    max-width: 100%;
  }
`;
