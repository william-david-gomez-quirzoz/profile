'use client'
import "./globals.css";
import { roboto } from "src/styles/fonts";
import Header from "src/components/header";
import styles from "./page.module.css";
import { MdContactMail } from "react-icons/md";
import { FloatButton } from "src/components/float-button";
import Link from "next/link";
import { useState } from "react";
import { SideBar } from "src/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sideBar, serSideBar] = useState(false);
  const handleSideBar = () => {
    serSideBar((prev) => !prev)
  }
  return (
    <html lang="en">
      <body className={`${roboto.className} ${styles.container}`}>
        <Header
          handleSidebar={handleSideBar}
        />

        <main>{children}</main>

        <FloatButton>
          <Link href="/contact">
            <MdContactMail className={styles.contact_icon} />
          </Link>
        </FloatButton>

        <SideBar open={sideBar} handleSidebar={handleSideBar} />
      </body>
    </html>
  );
}
