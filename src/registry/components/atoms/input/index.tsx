import * as React from "react";

import { cn } from "@/lib/utils";

import styles from "./styles.module.css";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	const id = React.useId();

	return (
		<input
			type={type}
			data-slot="input"
			id={id}
			className={cn(styles.input, className)}
			{...props}
		/>
	);
}

export { Input };
