import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

/*
  NOTE:
  css syntax highlighting doesn't work with plain string literal
  there is an extension for it called "es6-string-css" but it has a bug
  link to bug: https://github.com/bashmish/es6-string-css/issues/6
*/

function createStyledComponent<
  P,
  HA extends HTMLAttributes<HTMLElement> = HTMLAttributes<HTMLElement>
>(
  name: `${keyof JSX.IntrinsicElements}.${string}`,
  styles: (props: P) => {
    base: SerializedStyles;
    visited?: SerializedStyles;
    focus?: SerializedStyles;
    hover?: SerializedStyles;
    active?: SerializedStyles;
    checked?: SerializedStyles;
    disabled?: SerializedStyles;
  },
  selfClosing: boolean = false
) {
  const [tagName, className] = name.split(".");

  return (props: StyledComponentProps) => {
    const { children, ...otherProps } = props;
    const stylesObj = styles(props);
    //@ts-ignore
    const isDisabled = otherProps.disabled;

    //@ts-ignore
    const StyledComponent = styled[tagName](() => {
      const { base, visited, focus, hover, active, checked, disabled } = stylesObj;

      return css`
        ${base}

        &:visited {
          ${visited}
        }

        &:focus {
          ${focus}
        }

        &:hover {
          ${!isDisabled && hover}
        }

        &:active {
          ${!isDisabled && active}
        }

        &:checked {
          ${checked}
        }

        &:disabled {
          ${disabled}
        }
      `;
    });

    return (
      <>
        {selfClosing && <StyledComponent {...{ className }} {...otherProps} />}
        {!selfClosing && (
          <StyledComponent {...{ className }} {...otherProps}>
            {children}
          </StyledComponent>
        )}
      </>
    );
  };

  type StyledComponentProps = P & HA & { children?: ReactNode };
}

export { createStyledComponent };

