import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Internationalization in Next.js",
	description: "Internationalization in Next.js 14 with next-Intl",
};

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const messages = useMessages();

	return (
		<html lang={locale}>
			<NextIntlClientProvider messages={messages}>
				<body className={inter.className}>{children}</body>
			</NextIntlClientProvider>
		</html>
	);
}
