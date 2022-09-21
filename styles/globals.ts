import { css } from "@emotion/react";

import { reset } from "./vendors/reset";
import { colors } from "./variables/colors.variables";
import { fonts } from "./variables/fonts.variables";

const globalStyles = css`
  ${reset}

  :root {
    ${colors}
    ${fonts}
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  hr {
    background-color: #000000;
    border: none;
    height: 1px;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    bottom: 0;
    left: 0;
    overflow: auto;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export { globalStyles };

