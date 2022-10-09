/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createGlobalStyle } from "styled-components";
import { device } from "./devices";

export const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    /* Box sizing property is not inherited by itself, so by using this, we inherit it */
  }

  body {
    background-color: #725166;
  }

  .ant-select-dropdown {
    background-color: #937d8e !important;
    border-radius: 0 0 1.5rem 1.5rem !important;
    padding-block: 0 !important;
  }

  .ant-select-item-option-content {
    color: #f5f5f5 !important;
    font-size: 2rem;
  }

  .ant-select-item-option-active:not(.ant-select-item-option-disabled) > 
  .ant-select-item-option-content{
    color: #725166 !important;
  }

  html {
    font-size: 62.5%; /*  1 rem = 10 px */
  }

  @media ${device.tablet} {
    html {
      font-size: 50%; // 1 rem = 8px
    }
  }

  @media ${device.mobile} {
    html {
      font-size: 37.5%; // 1 rem = 6px
    }
  }

   @media ${device.tiny} {
    html {
      font-size: 31.25%; // 1 rem = 5px
    }
  }
`;
