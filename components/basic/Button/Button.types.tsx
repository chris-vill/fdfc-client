import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnType: "primary" | "secondary";
};

