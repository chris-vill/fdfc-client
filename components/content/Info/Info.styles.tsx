import type { HTMLAttributes } from "react";
import { css } from "@emotion/react";

import * as _ from "utils";

export const Container = _.createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.info_container",
  (props) => {
    return {
      base: css`
        display: flex;
        flex-direction: column;
      `,
    };
  }
);

type ContainerProps = {};

