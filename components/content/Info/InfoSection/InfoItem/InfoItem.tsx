import type * as T from "types";
import * as SC from "./InfoItem.styles";

function InfoItem(props: T.InfoItemProps) {
  const { label, value } = props;

  return (
    <>
      <SC.Container>
        <SC.Label>{label}:</SC.Label>
        <SC.Value>{value}</SC.Value>
      </SC.Container>
    </>
  );
}

export { InfoItem };

