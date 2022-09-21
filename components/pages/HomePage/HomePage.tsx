import * as SC from "./HomePage.styles";
import { Button } from "components";

function HomePage() {
  return (
    <>
      <SC.Container>
        <Button btnType="primary" />
        <Button btnType="secondary" />
      </SC.Container>
    </>
  );
}

export { HomePage };

