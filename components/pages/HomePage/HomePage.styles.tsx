import type { HTMLAttributes } from "react";
import { css } from "@emotion/react";

import type * as T from "types";
import { createStyledComponent } from "utils";

export const Container = createStyledComponent<T.ContainerProps, HTMLAttributes<HTMLDivElement>>(
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

