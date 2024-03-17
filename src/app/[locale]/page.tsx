import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
	return (
		<>
			<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<Header />
					<Hero />
				</div>
			</div>
		</>
	);
}
