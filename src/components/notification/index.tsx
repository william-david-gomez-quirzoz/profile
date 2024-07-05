import { NotificationProps } from "./types";
import styles from "./styles.module.css";
import { Typography } from "../typography";
import { useEffect, useState } from "react";
const Notification = ({ open, close, message }: NotificationProps) => {
  const [show, setShow] = useState("");

  useEffect(() => {
    if (open) {
      setShow("fade_in");
      setTimeout(() => {
        setShow("");
        close(false);
      }, 4000);
      return;
    }
  }, [open]);

  return open ? (
    <div className={`${styles.container} ${show}`}>
      <Typography style={{ color: "#000" }}>{message}</Typography>
    </div>
  ) : null;
};

export { Notification };
