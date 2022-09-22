import type * as T from "types";
import { InfoItem } from "./InfoItem/InfoItem";
import * as SC from "./InfoSection.styles";

function InfoSection(props: T.InfoSectionProps) {
  const { label, info = [] } = props;

  return (
    <>
      <SC.Container>
        <SC.Label>{label}</SC.Label>
        <SC.Infos>
          {Object.entries(info).map(([key, val], i) => {
            return <InfoItem label={key} value={val} key={i} />;
          })}
        </SC.Infos>
      </SC.Container>
    </>
  );
}

export { InfoSection };

