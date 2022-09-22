import type { FormHTMLAttributes, HTMLAttributes } from "react";
import { css } from "@emotion/react";

import type * as T from "types";
import * as _ from "utils";
import { fonts } from "styles";

export const Container = _.createStyledComponent<
  ContainerProps,
  FormHTMLAttributes<HTMLFormElement>
>("form.initial-registration-form_container", (props) => {
  return {
    base: css`
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 18px;
    `,
  };
});

export const Label = _.createStyledComponent<LabelProps, HTMLAttributes<HTMLHeadingElement>>(
  "h2.initial-registration-form_label",
  (props) => {
    return {
      base: css`
        ${fonts.itemHeader}

        color: var(--clr-accent-s20);
      `,
    };
  }
);

export const Fields = _.createStyledComponent<FieldsProps, HTMLAttributes<HTMLDivElement>>(
  "div.initial-registration-form_fields",
  (props) => {
    return {
      base: css`
        display: flex;
        flex-direction: column;
        gap: 4px;
      `,
    };
  }
);

export const Buttons = _.createStyledComponent<ButtonsProps, HTMLAttributes<HTMLDivElement>>(
  "div.initial-registration-form_buttons",
  (props) => {
    return {
      base: css`
        align-items: center;
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        padding: 0px 6px;
      `,
    };
  }
);

type ButtonsProps = {};
type ContainerProps = {};
type FieldsProps = {};
type LabelProps = {};

