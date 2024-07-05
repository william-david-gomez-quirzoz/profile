import { CardProps, CardTitle } from "./types";
import styles from './styles.module.css'
const Card = ({ children, ...rest }: CardProps) => {
  return <div {...rest} className={`${styles.container}`}>
    {children}
    </div>;
};

Card.TitleXL = ({ children, ...rest }: CardTitle) => {
  return <h4 {...rest} className={`${styles.titlexl}`}>{children}</h4>;
};
Card.Title = ({ children, ...rest }: CardTitle) => {
  return <h4 {...rest} className={`${styles.title}`}>{children}</h4>;
};

Card.Description = ({ children, ...rest }: CardTitle) => {
  return <p {...rest} className={`${styles.description}`}>{children}</p>;
};

export { Card };
