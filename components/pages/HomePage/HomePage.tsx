import * as SC from "./HomePage.styles";
import { Input } from "components";

function HomePage() {
  return (
    <>
      <SC.Container>
        <Input label="Text Label" type="password" />
      </SC.Container>
    </>
  );
}

export { HomePage };

