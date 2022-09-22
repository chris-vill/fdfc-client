import * as SC from "./Step3Page.styles";
import { Button, Form } from "components";
import { useStore } from "core";

function Step3Page() {
  const clear = useStore((state) => state.clear);

  return (
    <>
      <SC.Container>
        <Button btnType="secondary" label="Logout" onClick={clear} />
        <Form.ContactInfo />
      </SC.Container>
    </>
  );
}

export { Step3Page };

