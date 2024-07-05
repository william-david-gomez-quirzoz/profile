import { variantTypograpy } from "./constants";
import { TypographyProps } from "./types";
import './styles.css'
const Typography = ({
  variant = variantTypograpy.title,
  ...rest
}: TypographyProps) => {
  return <p {...rest} className={`${variant} ${rest.className}`} />;
};

export { Typography };
