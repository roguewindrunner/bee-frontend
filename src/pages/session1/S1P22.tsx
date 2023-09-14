import S1F23 from "@/assets/S1/S1F23.png";
export default function S1P22() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="mb-8 border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Reconciling Human Welfare and the
						Environment – Ways for More
						Sustainable Oil Palm Cultivation?
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Infoslide: Agroforestry
					</span>
				</h1>
				<p className="poppins md:text-xl">
					“Agroforestry is agricultural and
					forestry systems that try to balance
					various needs:
					<ol className="poppins space-y-4 lg:space-y-0 sm:text-xs text-left py-4 list-decimal list-outside ml-6 px-4 md:text-xl">
						<li>
							to produce trees for timber and
							other commercial purposes;
						</li>
						<li>
							to produce a diverse, adequate
							supply of nutritious foods both to
							meet global demand and to satisfy
							the needs of the producers
							themselves; and
						</li>
						<li>
							to ensure the protection of the
							natural environment so that it
							continues to provide resources and
							environmental services to meet the
							needs of the present generations and
							those to come”
						</li>
					</ol>
					(
					<a
						className="text-sky-500 underline break-all md:break-keep"
						href="https://www.worldagroforestry.org/about/agroforestry"
						target="_blank"
						rel="noopener noreferrer">
						World Agroforestry – ICRAF
					</a>
					).
				</p>
				<p className="poppins md:text-xl">
					As highlighted in the definition,
					agroforestry is seen as one global
					solution to maintain farmers’ income and
					to mitigate negative environmental
					impacts of crop cultivation. Enriching
					trees in monocultures can enhance
					multiple ecosystem functions, e.g., gas,
					climate and water regulation carbon
					sequestration, soil fertility and
					biodiversity.
				</p>

				<figure className="text-center mb-4">
					<img
						src={S1F23}
						alt=""
						className="mx-auto"
					/>
					<figcaption className="poppins text-center text-xs md:text-xl py-4">
						<strong>Figure 23</strong>: EFForTS
						BEE: View of one tree island from an
						unmanned aerial vehicle three years
						after tree planting, in 2016: Oil
						palms surrounded by various native
						multi-purpose tree species. Picture
						credit: Watit Kohkthong.
					</figcaption>
				</figure>
			</div>
		</main>
	);
}
