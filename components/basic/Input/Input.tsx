import { useFormContext } from "react-hook-form";

import type * as T from "types";
import * as SC from "./Input.styles";

function Input(props: T.InputProps) {
  const { label, name, ...htmlAttrs } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message as string;

  return (
    <>
      <SC.Container isError={!!errorMessage}>
        <span>{label}</span>
        <input placeholder={errorMessage} {...htmlAttrs} {...register(name, { required: true })} />
      </SC.Container>
    </>
  );
}

export { Input };

