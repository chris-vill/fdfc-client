import type { HTMLAttributes, InputHTMLAttributes } from "react";
import { css } from "@emotion/react";

import * as _ from "utils";
import { fonts } from "styles";

export const Container = _.createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.info-section_container",
  (props) => {
    return {
      base: css`
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 4px 6px 6px;
      `,
    };
  }
);

export const Label = _.createStyledComponent<LabelProps, HTMLAttributes<HTMLHeadingElement>>(
  "h3.info-section_container",
  (props) => {
    return {
      base: css`
        ${fonts.itemHeader}

        color: var(--clr-accent);
      `,
    };
  }
);

export const Infos = _.createStyledComponent<InfosProps, HTMLAttributes<HTMLOListElement>>(
  "ol.info-section_container",
  (props) => {
    return {
      base: css`
        display: flex;
        flex-direction: column;
        padding-left: 8px;
      `,
    };
  }
);

type ContainerProps = {};
type LabelProps = {};
type InfosProps = {};

