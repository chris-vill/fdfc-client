import * as T from "types";
import * as SC from "./Button.styles";

function Button(props: T.ButtonProps) {
  const { btnType, ...htmlAttrs } = props;

  return (
    <>
      <SC.Container {...{ btnType }} {...htmlAttrs}>
        Hello
      </SC.Container>
    </>
  );
}

export { Button };

