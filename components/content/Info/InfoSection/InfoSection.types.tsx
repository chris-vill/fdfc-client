import type * as T from "types";

export type InfoSectionProps = {
  label: string;
  info: Record<T.InfoItemProps["label"], T.InfoItemProps["value"]>;
};
