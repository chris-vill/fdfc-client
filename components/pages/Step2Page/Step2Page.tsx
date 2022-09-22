import * as SC from "./Step2Page.styles";
import { Button, Form } from "components";
import { useStore } from "core";

function Step2Page() {
  const clear = useStore((state) => state.clear);

  return (
    <>
      <SC.Container>
        <Button btnType="secondary" label="Logout" onClick={clear} />
        <Form.LocationInfo />
      </SC.Container>
    </>
  );
}

export { Step2Page };

