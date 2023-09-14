import Task5 from "@/components/tasks/session1/Task5";

export default function S1P12() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Impacts of Oil Palm Cultivation
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Oil Palm Plantation Ecosystem
					</span>
				</h1>

				<p className="poppins md:text-xl">
					Before you compile impacts of oil palm
					cultivation, let us have a look on the
					oil palm plantation from an ecosystem
					perspective. By exploring the
					interactive 360° tour of a plantation in
					Jambi province, assess oil palm
					plantations as an ecosystem (click on
					the picture below to start the tour in
					your browser).
				</p>
				<Task5 />
				<figure className="text-center mb-4">
					<iframe
						src="https://www.crc990.uni-goettingen.de/PR/Oil%20palm_en/app-files/index.html"
						title="Oil Palm Plantation"
						className="w-full aspect-[9/14] md:aspect-square "></iframe>
					<figcaption className="poppins text-center text-xs md:text-xl py-4">
						<strong>Link</strong>:
						<a
							className="text-sky-500 underline break-all md:break-keep"
							href="https://www.crc990.uni-goettingen.de/PR/Oil%20palm_en/app-files/index.html"
							target="_blank"
							rel="noopener noreferrer">
							https://www.crc990.uni-goettingen.de/PR/Oil%20palm_en/app-files/index.html
						</a>
					</figcaption>
				</figure>
			</div>
		</main>
	);
}
