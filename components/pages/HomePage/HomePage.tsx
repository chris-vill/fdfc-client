import * as SC from "./HomePage.styles";
import { Form } from "components";

function HomePage() {
  return (
    <>
      <SC.Container>
        <Form.Login />
      </SC.Container>
    </>
  );
}

export { HomePage };

