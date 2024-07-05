"use client";
import { paths } from "src/utils/constants";
import { Typography } from "../typography";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../button";
import { IoMenu } from "react-icons/io5";
const SideBar = ({ open, handleSidebar }: { open: boolean; handleSidebar: () => void }) => {
  const pathName = usePathname();
  if(!open) return null
  return (
    <div className={`${styles.container}`}>
      <div className={styles.header}>
        <Button onClick={handleSidebar} variant="text">
          <IoMenu className={styles.menu} />
        </Button>

        <Typography className={styles.text_color}>William Gómez</Typography>
      </div>

      <ul className={`${styles.paths}`}>
        {paths.map((path) => (
          <li key={path.id}>
            <Link
              href={path.to}
              className={`${
                pathName == path.to ? styles.active : styles.text_color
              }`}
            >
              {path.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SideBar };
