import styled, { createGlobalStyle } from "styled-components";

export const containerSize = 340;

export const GlobalStyle = createGlobalStyle`
    body {
        background: #f7f7f7;
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
`;

export const Container = styled.div`
  width: ${containerSize}px;
  padding: 0px;
  margin: 0 auto;
`;

export const HeaderLinks = styled.div`
  background: #000;
  width: 1;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > :first-child {
    border-bottom: 1px solid #333;
    padding-bottom: 4px;
  }

  & > :last-child {
    padding-top: 4px;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;

    a {
      text-align: center;
      width: 70px;
      color: #bbb;
      text-transform: uppercase;
      font-size: 11px;
      text-decoration: none;

      :hover {
        color: #fff;
      }

      :visited {
        color: #fff;
      }
    }
  }
`;

export const AppBarContainer = styled.div`
  width: ${containerSize - 50}px;
  position: relative;
  margin-left: 50px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 80px;
  background: #aad500;
  padding: 9px 0px;
`;

export const Content = styled.div`
  margin-top: 100px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
