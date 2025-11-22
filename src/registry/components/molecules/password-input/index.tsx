import { EyeIcon, EyeOffIcon } from "lucide-react";
import type { ComponentProps } from "react";
import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "../../atoms/input";
import styles from "./styles.module.css";

export interface PasswordInputProps
	extends Omit<ComponentProps<"input">, "type"> {
	/**
	 * Whether to show the password visibility toggle button.
	 * @default true
	 */
	showToggle?: boolean;
	/**
	 * Initial visibility state of the password.
	 * @default false
	 */
	defaultVisible?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	(
		{
			showToggle = true,
			defaultVisible = false,
			className,
			autoComplete = "current-password",
			...props
		},
		ref,
	) => {
		const id = React.useId();
		const [isVisible, setIsVisible] = useState<boolean>(defaultVisible);

		const toggleVisibility = () => setIsVisible((prev) => !prev);

		if (!showToggle) {
			return (
				<Input
					ref={ref}
					type="password"
					autoComplete={autoComplete}
					className={className}
					{...props}
				/>
			);
		}

		return (
			<div className={styles.container}>
				<Input
					ref={ref}
					type={isVisible ? "text" : "password"}
					autoComplete={autoComplete}
					id={`input-${id}`}
					className={cn(styles.inputWithToggle, className)}
					{...props}
				/>
				<button
					className={styles.toggle}
					type="button"
					onClick={toggleVisibility}
					aria-label={isVisible ? "Hide password" : "Show password"}
					aria-pressed={isVisible}
					aria-controls={`btn-${id}`}
					tabIndex={-1}
				>
					{isVisible ? (
						<EyeOffIcon size={16} aria-hidden="true" />
					) : (
						<EyeIcon size={16} aria-hidden="true" />
					)}
				</button>
			</div>
		);
	},
);

PasswordInput.displayName = "PasswordInput";
