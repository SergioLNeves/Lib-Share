import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

import "./button-variants.css"
import styles from "./button.module.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "link";
  asChild?: boolean;
}

function Button({ className, variant = "primary", asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const variantClass = variant === "link" ? styles["link-button"] : styles[variant];

  return (
    <Comp
      data-slot="button"
      className={cn(styles.base, variantClass, className)}
      {...props}
    />
  );
}

export { Button };
export type { ButtonProps };
