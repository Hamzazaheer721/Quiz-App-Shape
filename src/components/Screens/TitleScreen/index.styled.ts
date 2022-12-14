/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from "styled-components";
import { Select } from "antd";
import { device } from "styles";

export const SelectFieldWrapper = styled.div`
  width: 80%;
  position: relative;
  font-size: 2rem;
  color: white;

  @media ${device.desktop1080p} {
    width: 60%;
  }
  @media ${device.desktop} {
    width: 60%;
  }
  @media ${device.laptop} {
    width: 60%;
  }
  @media ${device.tablet} {
    width: 60%;
  }
`;

export const Label = styled.span`
  font-size: inherit;
  color: inherit;
  position: absolute;
  z-index: 1;
  top: 48%;
  left: 1rem;
  transform: translateY(-50%);
`;

export const SelectField = styled(Select)`
  & * {
    font-size: 2rem;
  }

  width: 100%;
  color: white;

  .ant-select-selector {
    background-color: ${({ theme }) => theme.color.gray} !important;
    /* background-color: red !important; */
    border: none !important;
    border-radius: 1.5rem 1.5rem 0 0 !important;
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.white} !important;
  }

  .ant-select-selection-item {
    padding-left: 5.5rem !important;
  }

  .ant-select-arrow {
    color: ${({ theme }) => theme.color.black};
  }
`;
