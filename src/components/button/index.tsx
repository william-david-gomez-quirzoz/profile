import { variantButton } from "./contants";
import "./styles.css";
import { ButtonProps } from "./types";

const Button = ({ variant = variantButton.container, ...rest }: ButtonProps) => {
  return <button {...rest} className={`${variant} ${rest.className}`}></button>;
};

export { Button };
