import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
--yellow: #ded533;
--purple: #4b068c;
--activeBackground: #b8b01c;
--linkHover: #568726;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

`;
