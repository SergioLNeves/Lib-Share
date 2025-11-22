import { Loader2Icon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
	return (
		<Loader2Icon
			role="status"
			aria-label="Loading"
			className={cn(styles.spinner, className)}
			{...props}
		/>
	);
}

export { Spinner };
