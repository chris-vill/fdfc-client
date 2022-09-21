import type { HTMLAttributes, InputHTMLAttributes } from "react";
import { css } from "@emotion/react";

import type * as T from "types";
import * as _ from "utils";
import { fonts } from "styles";

export const Container = _.createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.input_container",
  (props) => {
    return {
      base: css`
        display: flex;
        flex-direction: column;
        gap: 2px;
      `,
    };
  }
);

export const Label = _.createStyledComponent<LabelProps, HTMLAttributes<HTMLSpanElement>>(
  "span.input_container",
  (props) => {
    return {
      base: css`
        ${fonts.itemSubheader}

        color: var(--clr-accent);

        /*
          FIXME :has selector is not working

          &:has(+ .input_container:focus) {
            color: var(--clr-primary);
          }
        */
      `,
    };
  }
);

export const Input = _.createStyledComponent<InputProps, InputHTMLAttributes<HTMLInputElement>>(
  "input.input_container",
  (props) => {
    return {
      base: css`
        border: 2px solid var(--clr-accent);
        border-radius: 4px;
        color: var(--clr-dark);
      `,
      focus: css`
        border-color: var(--clr-primary-t20);
      `,
    };
  },
  true
);

type ContainerProps = {};
type LabelProps = {};
type InputProps = {};

