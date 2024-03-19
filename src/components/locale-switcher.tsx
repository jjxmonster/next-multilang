import { usePathname, useRouter } from "../../navigation";

export const LocaleSwitcher = () => {
	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (locale: string) => {
		router.push(pathname, { locale });
	};

	return (
		<div className="flex">
			<button className="text-black" onClick={() => handleChange("pl")}>
				PL
			</button>
			<button className="text-black" onClick={() => handleChange("en")}>
				EN
			</button>
		</div>
	);
};
