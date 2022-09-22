import * as T from "types";
import * as SC from "./Button.styles";

function Button(props: T.ButtonProps) {
  const { btnType, label, ...htmlAttrs } = props;

  return (
    <>
      <SC.Container {...{ btnType }} {...htmlAttrs}>
        {label}
      </SC.Container>
    </>
  );
}

export { Button };

