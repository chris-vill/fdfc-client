import type { HTMLAttributes } from "react";
import { css } from "@emotion/react";

import type * as T from "types";
import * as _ from "utils";
import { fonts } from "styles";

export const Container = _.createStyledComponent<ContainerProps, HTMLAttributes<HTMLButtonElement>>(
  "button.button_container",
  (props) => {
    const isPrimary = props.btnType === "primary";
    const isSecondary = props.btnType === "secondary";
    const isDisabled = props.disabled;

    return {
      base: css`
        ${fonts.button}

        border: 2px solid var(--clr-accent);
        border-radius: 8px;
        padding: 8px 14px;
        transition: box-shadow 250ms ease-in-out, translate 250ms ease;

        ${isPrimary &&
        css`
          background-color: var(--clr-primary);
          color: var(--clr-light);
        `}

        ${isSecondary &&
        css`
          color: var(--clr-accent);
        `}
      `,
      hover: css`
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        translate: 0px -4px;
      `,
      active: css`
        border-color: var(--clr-accent-t20);
        box-shadow: none;
        translate: 0px 0px;

        ${isPrimary &&
        css`
          background-color: var(--clr-primary-t20);
        `}

        ${isSecondary &&
        css`
          color: var(--clr-accent-t20);
        `}
      `,
      disabled: css`
        border-color: var(--clr-light-s20);

        ${isPrimary &&
        css`
          background-color: var(--clr-light-s20);
        `}

        ${isSecondary &&
        css`
          color: var(--clr-light-s20);
        `}
      `,
    };
  }
);

type ContainerProps = T.ButtonProps & {};

