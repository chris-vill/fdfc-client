import type { HTMLAttributes } from "react";
import { css } from "@emotion/react";

import * as _ from "utils";
import { fonts } from "styles";

export const Container = _.createStyledComponent<ContainerProps, HTMLAttributes<HTMLLIElement>>(
  "li.info-item_container",
  (props) => {
    return {
      base: css`
        display: flex;
        gap: 4px;
        padding: 2px 4px;
      `,
    };
  }
);

export const Label = _.createStyledComponent<LabelProps, HTMLAttributes<HTMLSpanElement>>(
  "span.info-item_container",
  (props) => {
    return {
      base: css`
        ${fonts.itemSubheader}

        color: var(--clr-primary-s20);
      `,
    };
  }
);

export const Value = _.createStyledComponent<ValueProps, HTMLAttributes<HTMLSpanElement>>(
  "span.info-item_container",
  (props) => {
    return {
      base: css`
        ${fonts.itemSubheader}

        color: var(--clr-dark);
      `,
    };
  }
);

type ContainerProps = {};
type LabelProps = {};
type ValueProps = {};

