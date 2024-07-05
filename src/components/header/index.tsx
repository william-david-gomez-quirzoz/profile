"use client";
import Link from "next/link";
import { paths } from "src/utils/constants";
import styles from "./style.module.css";
import Image from "next/image";
import { Typography } from "../typography";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { Button } from "../button";
export default function Header({handleSidebar}: { handleSidebar: () => void }) {
  const pathName = usePathname();

  return (
    <nav className={styles.container}>
      <Button onClick={handleSidebar} variant="text">
        <IoMenu className={styles.menu} />
      </Button>
      <Typography className={styles.title}>William Gómez</Typography>

      <ul className={`${styles.paths}`}>
        {paths.map((path) => (
          <li key={path.id}>
            <Link
              href={path.to}
              className={`${pathName == path.to ? styles.active : "unactive"}`}
            >
              {path.label}
            </Link>
          </li>
        ))}
      </ul>
      <Image
        className={styles.profile}
        src="/profile.png"
        alt="Profile"
        width={50}
        height={50}
      />
    </nav>
  );
}
