import { ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Container, GlobalStyle } from "./assets/styled";
import theme from "./assets/globalMaterialStyles";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <App />
      </Container>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
