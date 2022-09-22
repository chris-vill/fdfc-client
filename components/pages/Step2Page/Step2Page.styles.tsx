import type { HTMLAttributes } from "react";
import { css } from "@emotion/react";

import * as _ from "utils";

export const Container = _.createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.step2-page_container",
  (P) => ({
    base: css`
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      width: 100%;

      & > button {
        position: absolute;
        top: 46px;
        right: 46px;
      }
    `,
  })
);

export type ContainerProps = {};

