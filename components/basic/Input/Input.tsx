import type * as T from "types";
import * as SC from "./Input.styles";

function Input(props: T.InputProps) {
  const { label, ...htmlAttrs } = props;

  return (
    <>
      <SC.Container>
        <SC.Label>{label}</SC.Label>
        <SC.Input {...htmlAttrs} />
      </SC.Container>
    </>
  );
}

export { Input };

