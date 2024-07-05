import Image from "next/image";
import { Typography } from "../typography";
import styles from "./styles.module.css";
import { ReactNode } from "react";
const Description = ({
  alt,
  description,
  src,
  position = "left",
  icon,
}: {
  src?: string;
  icon?: ReactNode;
  alt: string;
  description: string;
  position?: "left" | "right";
}) => {
  return (
    <div className={styles.container}>
      {position == "left" && (
        <Typography className={`${styles.text}`} variant="description">
          {description}
        </Typography>
      )}
      {!!src && (
        <Image
          className={`${styles.img}`}
          src={src}
          alt={alt}
          width={50}
          height={50}
        />
      )}
      {
        !!icon && (
            <div className={styles.icon}>{icon}</div>
        )
      }
      {position == "right" && (
        <Typography className={`${styles.text}`} variant="description">
          {description}
        </Typography>
      )}
    </div>
  );
};

export { Description };
