import styled from "styled-components";

export const PerformanceScreenWrapper = styled.div`
  box-sizing: border-box;
  padding-inline: 10rem 1rem;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(5, minmax(5rem, 10rem));
  grid-auto-flow: dense;
  width: fit-content;
`;
