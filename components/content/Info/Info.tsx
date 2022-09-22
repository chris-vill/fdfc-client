import { pick } from "lodash";

import type * as T from "types";
import { InfoSection } from "./InfoSection/InfoSection";
import * as SC from "./Info.styles";

function Info(props: T.InfoProps) {
  const { info } = props;
  const additionalInfo = pick(info, ["civil_status", "occupation"]);
  const contactInfo = pick(info, ["mobile", "landline", "email_address"]);
  const locationInfo = pick(info, ["address_permanent", "address_temporary"]);

  return (
    <>
      <SC.Container>
        <InfoSection label="Additional Info" info={additionalInfo} />
        <InfoSection label="Location Info" info={locationInfo} />
        <InfoSection label="Contact Info" info={contactInfo} />
      </SC.Container>
    </>
  );
}

export { Info };

