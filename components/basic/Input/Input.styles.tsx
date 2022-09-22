import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import * as _ from "utils";
import { fonts } from "styles";

export const Container = (props: ContainerProps) => {
  const { children, isError, ...otherProps } = props;

  const StyledComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px 6px 6px;

    & > span {
      ${fonts.itemSubheader}

      color: var(--clr-accent);

      /*
        TS doesn't recognize sibling selector inside :has()
        &:has(+ input:focus) {}
      */
    }

    & > input {
      border: 2px solid var(--clr-accent);
      border-radius: 4px;
      color: var(--clr-dark);

      &:focus {
        border-color: var(--clr-primary-t20);
      }
    }

    ${isError &&
    css`
      & > span {
        color: var(--clr-error-s20);
      }

      & > input {
        border-color: var(--clr-error-s20);
        color: var(--clr-error-s20);

        &::placeholder {
          color: var(--clr-error-s20);
        }
      }
    `}
  `;

  return (
    <StyledComponent className="input" {...otherProps}>
      {children}
    </StyledComponent>
  );
};

type ContainerProps = {
  children?: ReactNode;
  isError: boolean;
};

