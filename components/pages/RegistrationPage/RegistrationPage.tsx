import * as SC from "./RegistrationPage.styles";
import { Form } from "components";

function RegistrationPage() {
  return (
    <>
      <SC.Container>
        <Form.InitialRegistration />
      </SC.Container>
    </>
  );
}

export { RegistrationPage };

