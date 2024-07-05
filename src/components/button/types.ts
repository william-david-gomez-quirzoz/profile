import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { variantButton } from "./contants";

type ButtonProps = {
  variant?: keyof typeof variantButton;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export type { ButtonProps };
