"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { LocaleSwitcher } from "./locale-switcher";

export const Header = () => {
	const t = useTranslations("Home");

	return (
		<header className="mb-8 flex items-center justify-between border-b py-4 md:mb-12 md:py-8 xl:mb-16">
			<nav className="hidden gap-12 lg:flex">
				<Link href="#" className="text-lg font-semibold text-indigo-500">
					{t("menu.home")}
				</Link>
				<Link
					href="#"
					className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
				>
					{t("menu.pricing")}
				</Link>
				<Link
					href="#"
					className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
				>
					{t("menu.about")}
				</Link>
			</nav>
			<LocaleSwitcher />
			<button
				type="button"
				className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
				Menu
			</button>
		</header>
	);
};
