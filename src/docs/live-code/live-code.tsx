import React from "react";
import { LiveProvider, LivePreview, LiveError } from "react-live";
import { Button } from "@/registry/components/atoms/button";
import { Badge } from "@/registry/components/atoms/badge";
import { Input } from "@/registry/components/atoms/input";
import { Separator } from "@/registry/components/atoms/separator";
import { Spinner } from "@/registry/components/atoms/spinner";
import {
	Avatar,
	AvatarImage,
	AvatarFallback,
} from "@/registry/components/atoms/avatar";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetFooter,
	SheetClose,
} from "@/registry/components/atoms/sheet";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/registry/components/atoms/card";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/registry/components/atoms/navigation-menu";
import { PasswordInput } from "@/registry/components/molecules/password-input";
import styles from "./live-code.module.css";

interface LiveCodeProps {
	code: string;
	language?: string;
	meta?: string;
}

// Scope with all available components
const scope = {
	React,
	Button,
	Badge,
	Input,
	Separator,
	Spinner,
	Avatar,
	AvatarImage,
	AvatarFallback,
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetFooter,
	SheetClose,
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardAction,
	CardContent,
	CardFooter,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	PasswordInput,
};

function LiveCode({ code, meta }: LiveCodeProps) {
	const isLive = meta?.includes("live");

	if (!isLive) {
		return (
			<pre>
				<code>{code}</code>
			</pre>
		);
	}

	// Remove imports/exports from code
	const cleanCode = code
		.replace(/^import\s+.*$/gm, "")
		.replace(/^export\s+(default\s+)?/gm, "")
		.trim();

	return (
		<div className={styles.liveCode}>
			<LiveProvider code={cleanCode} scope={scope} noInline={false}>
				<div className={styles.preview}>
					<LiveError className={styles.error} />
					<LivePreview />
				</div>
				<details className={styles.codeDetails}>
					<summary>Ver código</summary>
					<pre>
						<code>{code}</code>
					</pre>
				</details>
			</LiveProvider>
		</div>
	);
}

export { LiveCode };
export type { LiveCodeProps };
