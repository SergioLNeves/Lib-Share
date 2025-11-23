import type { ReactNode } from "react";
import styles from "./layout.module.css";
import { Header } from "../header/header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children = true }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export { Layout };
export type { LayoutProps };
