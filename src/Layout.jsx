import React, { useRef } from "react";
import { Logo, HeaderLinks, AppBarContainer, Content } from "./assets/styled";
import materialStyles from "./assets/materialStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const Layout = ({ children }) => {
  const classes = materialStyles();

  const handlerEnter = (e) => {
    if (e.charCode !== 13) {
      return false;
    }

    const URL = process.env.FALABELLA_SEARCH_URL + e.target.value;
    const win = window.open(URL, "_blank");
    win.focus();
  };

  const handlerClickSearchBtn = () => {
    const URL = process.env.FALABELLA_SEARCH_URL + inputSearchRef.current.value;
    const win = window.open(URL, "_blank");
    win.focus();
  };

  return (
    <div id="layout">
      <div className={classes.appBarRoot}>
        <AppBar position="static" color="inherit" elevation={1}>
          <Toolbar className={classes.toolbar}>
            <Logo src="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMzNiIgaGVpZ2h0PSI3NjgiIHZpZXdCb3g9IjAgMCAzMzYgNzY4Ij4KPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMwNy4yMjEgNDU0LjM3OHEtMTEuOTU3IDAtMjAuMjM0LTguNzM3dC04LjI3OC0yMC42OTQgOC4yNzgtMjAuNjk0IDIwLjIzNC04LjczNyAyMC4yMzQgOC43MzcgOC4yNzggMjAuNjk0LTguMjc4IDIwLjY5NC0yMC4yMzQgOC43Mzd6TTMzMy44OTMgMjMuMDI3bC05LjE5Ny0wLjkxOXQtMTUuNjM1IDAuOTE5cS05LjE5NyAxLjg0LTE1LjYzNSA1Ljk3OHQtMTIuODc2IDExLjQ5N3EtMTEuOTU3IDExLjk1Ni0xNy45MzUgMzEuNzN0LTEzLjMzNiA1Mi44ODRsLTM0Ljk0OSAxNzIuOTA4LTUuNTE4IDI1Ljc1MmgxMDQuODQ5bC00LjU5OCAxNC43MTZoLTEwMy4wMTBsLTYwLjcwMiAyODkuNzEzcS02LjQzOCAzMS4yNy0xNS4xNzYgNTcuOTQzdC0zMS43MyA0OC43NDVxLTE1LjYzNSAxNS42MzUtMzUuNDEgMjQuMzczdC00MC45MjggOC43MzhoLTEwLjExN2wxLjg0LTEwLjExN2g5LjE5N3ExMS45NTctMS44NCAyMC4yMzQtNi40Mzh0MTUuNjM1LTEzLjc5NXExMS4wMzctMTQuNzE2IDE3LjQ3NS0zMi4xOTF0MTMuNzk1LTUwLjU4NWw2Ni4yMi0zMTYuMzg1aC05NC43MzJsMy42NzktMTQuNzE2aDkzLjgxMmw2LjQzOC0yNy41OTIgMjguNTExLTE0NC4zOTdxNi40MzgtMzEuMjcxIDE1LjYzNS01Ny45NDN0MzEuMjctNDguNzQ1cTE1LjYzNS0xNS42MzUgMzUuNDEtMjQuMzczdDQwLjkyOC04LjczOGw2LjQzOCAwLjQ2dDExLjk1NyAwLjQ2bC0xLjg0IDEwLjExN3oiPjwvcGF0aD4KPC9zdmc+Cg==" />
            <AppBarContainer>
              <HeaderLinks>
                <div>
                  <a href="#">Banco</a>
                  <a href="#">Viajes</a>
                  <a href="#">Seguros</a>
                  <a href="#">Sodimac</a>
                </div>
                <div>
                  <a href="#">Homy</a>
                  <a href="#">Tottus</a>
                  <a href="#">Linio</a>
                  <a href="#">Mall Plaza</a>
                </div>
              </HeaderLinks>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon onClick={handlerClickSearchBtn} />
                </div>
                <InputBase
                  onKeyPress={handlerEnter}
                  className={classes.inputSearch}
                  placeholder="¿Qué buscas?"
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </AppBarContainer>
          </Toolbar>
        </AppBar>
      </div>

      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
