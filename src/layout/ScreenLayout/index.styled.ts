import styled from "styled-components";

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;

  &:not(&:last-child) {
    margin-block-end: 2rem;
  }
`;

export const TitleSection = styled.div`
  display: block;
`;

export const ScreenBodyContainer = styled.div`
  margin-inline-start: 4.5rem;
  margin-block: 2rem;
`;
