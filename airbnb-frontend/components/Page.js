import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  red: "#F16664",
  black: "#14171A",
  beige: "#FFF6E6",
  linkColor: "#79CCCD",
  linkHover: "#6BB7B9",
  textColor: "#484848",
  darkgrey: "#657786",
  lightgrey: "#AAB8C2",
  lightgrey2: "#E1E8ED",
  lightgrey3: "#F5F8FA",
  white: "#fff",
  bs: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px"
};

const StyledPage = styled.div`
  color: ${props => props.theme.textColor};
`;

const Inner = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem 2rem;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  
  body {
    background: #fff;
    height: 100vh;
    margin: 0;
    font-weight: 500;
    padding: 0;
    font-size: 1.5rem;
    line-height: 1.43;
    font-family: 'Montserrat', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${theme.linkColor};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
