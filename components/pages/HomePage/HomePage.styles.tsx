import type { HTMLAttributes } from "react";
import { css } from "@emotion/react";

import * as _ from "utils";

export const Container = _.createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.home-page_container",
  (P) => ({
    base: css`
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      width: 100%;
    `,
  })
);

export type ContainerProps = {};
