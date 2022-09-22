import { useRouter } from "next/router";
import { useEffect } from "react";

import * as SC from "./InsidePage.styles";
import { Button, Info } from "components";
import { useStore } from "core";

function InsidePage() {
  const info = useStore((state) => state.info);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const clear = useStore((state) => state.clear);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <SC.Container>
        <Button btnType="secondary" label="Logout" onClick={onLogout} />
        <Info {...{ info }} />
      </SC.Container>
    </>
  );

  function onLogout() {
    clear();
  }
}

export { InsidePage };

