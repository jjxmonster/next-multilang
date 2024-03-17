import Link from "next/link";

export const LocaleSwitcher = () => {
	return (
		<div className="flex">
			<Link className="text-gray-500" locale="en" href="/">
				EN
			</Link>
			<Link className="text-gray-500" locale="pl" href="/">
				PL
			</Link>
		</div>
	);
};
