export default function S1P13() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="mt-4 border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Impacts of Oil Palm Cultivation
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						For Comparison: Tropical Lowland
						Rainforest in Jambi
					</span>
				</h1>

				<p className="poppins md:text-xl">
					In comparison to the oil palm
					plantation, you now have the chance to
					get a virtual impression of a lowland
					rainforest in Jambi province, Sumatra –
					if you like (click on the picture below
					to start the tour in your browser).
				</p>

				<figure className="text-center mb-4">
					<iframe
						src="http://www.crc990.uni-goettingen.de/PR/Rainforest_en/app-files/index.html"
						title="Lowland Rainforest"
						className="w-full aspect-[9/14] md:aspect-square "></iframe>
					<figcaption className="poppins text-center text-xs md:text-xl py-4">
						<strong>Links</strong>:
						<a
							className="text-sky-500 underline break-all md:break-keep"
							href="http://www.crc990.uni-goettingen.de/PR/Rainforest_en/app-files/index.html"
							target="_blank"
							rel="noopener noreferrer">
							http://www.crc990.uni-goettingen.de/PR/Rainforest_en/app-files/index.html;
						</a>
						<a
							className="text-sky-500 underline break-all md:break-keep"
							href="http://www.crc990.uni-goettingen.de/PR/Rainforest_IND/app-files/index.html"
							target="_blank"
							rel="noopener noreferrer">
							http://www.crc990.uni-goettingen.de/PR/Rainforest_IND/app-files/index.html
						</a>
					</figcaption>
				</figure>
			</div>
		</main>
	);
}
