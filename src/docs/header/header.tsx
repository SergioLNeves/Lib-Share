import { ThemeToggle } from "@/docs/theme-toggle/theme-toggle";
import { Button } from "@/registry/components/atoms/button";

import styles from "./header.module.css";
import { GithubIcon } from "./github";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.actions}>
          <ThemeToggle />
          <Button variant="link" asChild>
            <a
              href="https://github.com/sergiolneves/lib-shared"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export { Header };
