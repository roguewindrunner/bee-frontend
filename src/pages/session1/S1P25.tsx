import preview from "@/assets/preview.png";
export default function S1P25() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="mt-4 montserrat">
					<span className="text-primary md:text-3xl text-lg">
						EFForTS - Interactive Field Tour
					</span>
				</h1>

				<p className="poppins text-md md:text-xl">
					In preparation for Session II, you can
					explore the interactive field tour to
					the EFForTS project:
				</p>
				<a
					className="text-sky-500 text-md md:text-lg underline break-all md:break-word"
					href="https://www.crc990.uni-goettingen.de/Interactive_Field_Tour/crc990-webversion/Interactive_Field_Tour.html"
					target="_blank"
					rel="noopener noreferrer">
					https://www.crc990.uni-goettingen.de/Interactive_Field_Tour/crc990-webversion/Interactive_Field_Tour.html
				</a>
				<iframe
					src="https://www.crc990.uni-goettingen.de/Interactive_Field_Tour/crc990-webversion/Interactive_Field_Tour.html"
					title="Lowland Rainforest"
					className="w-full overflow-hidden aspect-[9/14] md:aspect-square "></iframe>
				<p className="poppins text-md md:text-xl">
					Especially, station 2 on the EFForTS
					Biodiversity Enrichment Experiment will
					be relevant for you:
				</p>
				<img
					src={preview}
					alt=""
					className="w-full mx-auto mb-4"
				/>
			</div>
		</main>
	);
}
