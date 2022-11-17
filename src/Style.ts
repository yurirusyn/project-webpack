import styled, { createGlobalStyle } from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  body {
    font-family: "Roboto", sans-serif;
    font-style: normal;
  }
`;

// export const Container = styled.div`
//   width: 1200px;
//   padding-left: 15px;
//   padding-right: 15px;
//   margin: 0 auto;
// `;
