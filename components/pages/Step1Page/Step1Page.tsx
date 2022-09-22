import * as SC from "./Step1Page.styles";
import { Button, Form } from "components";
import { useStore } from "core";

function Step1Page() {
  const clear = useStore((state) => state.clear);

  return (
    <>
      <SC.Container>
        <Button btnType="secondary" label="Logout" onClick={clear} />
        <Form.AdditionalInfo />
      </SC.Container>
    </>
  );
}

export { Step1Page };

