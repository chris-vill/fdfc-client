import { css } from "@emotion/react";

const pageHeader = css`
  font-family: var(--ff-page-header);
  font-size: var(--fz-page-header);
  font-weight: var(--fw-page-header);
  font-style: var(--fs-page-header);
  line-height: var(--lh-page-header);
  text-transform: var(--tt-page-header);
`;

const pageSubheader = css`
  font-family: var(--ff-page-subheader);
  font-size: var(--fz-page-subheader);
  font-weight: var(--fw-page-subheader);
  font-style: var(--fs-page-subheader);
  line-height: var(--lh-page-subheader);
  text-transform: var(--tt-page-subheader);
`;
const sectionHeader = css`
  font-family: var(--ff-section-header);
  font-size: var(--fz-section-header);
  font-weight: var(--fw-section-header);
  font-style: var(--fs-section-header);
  line-height: var(--lh-section-header);
  text-transform: var(--tt-section-header);
`;

const itemHeader = css`
  font-family: var(--ff-item-header);
  font-size: var(--fz-item-header);
  font-weight: var(--fw-item-header);
  font-style: var(--fs-item-header);
  line-height: var(--lh-item-header);
  text-transform: var(--tt-item-header);
`;

const itemSubheader = css`
  font-family: var(--ff-item-subheader);
  font-size: var(--fz-item-subheader);
  font-weight: var(--fw-item-subheader);
  font-style: var(--fs-item-subheader);
  line-height: var(--lh-item-subheader);
  text-transform: var(--tt-item-subheader);
`;

const itemBody = css`
  font-family: var(--ff-item-body);
  font-size: var(--fz-item-body);
  font-weight: var(--fw-item-body);
  font-style: var(--fs-item-body);
  line-height: var(--lh-item-body);
  text-transform: var(--tt-item-body);
`;

const date = css`
  font-family: var(--ff-date);
  font-size: var(--fz-date);
  font-weight: var(--fw-date);
  font-style: var(--fs-date);
  line-height: var(--lh-date);
  text-transform: var(--tt-date);
`;

const button = css`
  font-family: var(--ff-button);
  font-size: var(--fz-button);
  font-weight: var(--fw-button);
  font-style: var(--fs-button);
  line-height: var(--lh-button);
  text-transform: var(--tt-button);
`;

const fonts = {
  pageHeader,
  pageSubheader,
  sectionHeader,
  itemHeader,
  itemSubheader,
  itemBody,
  date,
  button,
};

export { fonts };
