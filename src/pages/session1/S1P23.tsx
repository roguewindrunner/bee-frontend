import S1F24 from "@/assets/S1/S1F24.png";
export default function S1P23() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="mt-4 mb-8 border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Reconciling Human Welfare and the
						Environment – Ways for More
						Sustainable Oil Palm Cultivation?
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Infoslide: Design Landscapes for more
						Sustainable Oil Palm Cultivation
					</span>
				</h1>

				<p className="poppins md:text-xl">
					Agroforestry does not replace intact
					forests, but can create buffer zones, or
					ecological corridors in the landscape.
					Koh et al. (2009) propose establishing
					agroforestry zones in a so called design
					landscape (figure 25). It consists of
					HCV habitats, oil palm plantations and
					diverse agroforestry buffer zones (that
					might include oil palm) which are
					strategically placed within this
					landscape mosaic (ibid). Such an
					approach could help
				</p>
				<ul className="poppins space-y-4 md:space-y-0 list-disc list-outside ml-6 md:text-xl px-4">
					<li>
						to mitigate ecological drawbacks of
						traditional oil palm management;
					</li>
					<li>
						smallholders to be able to profit from
						the oil palm plantations
						socio-economically;
					</li>
					<li>
						smallholders to benefit from several
						different forest products (such as
						fruit or latex), as well as the
						ecosystem services of agroforestries
						(ibid.).
					</li>
				</ul>
				<p className="poppins md:text-xl">
					Additionally, the plantation road system
					could improve the market access for the
					smallholder agroforestry (ibid.).
					Depending on the plant species used,
					smallholders could also profit from them
					(e.g., timber, latex). Thus, there is,
					for example, an interest of many
					smallholders for tree enrichment
					plantings (Teuscher et al., 2016).
					However, currently more knowledge is
					needed regarding an “approved system
					with specific implication guidelines”
					(ibid., p. 2), and on the socioeconomic
					as well as ecological advantages and
					disadvantages of an oil-palm-based
					agroforestry (ibid.).
				</p>

				<figure className="text-center mb-4">
					<img
						src={S1F24}
						alt=""
						className="mx-auto"
					/>
					<figcaption className="poppins text-center text-xs md:text-xl py-4">
						<strong>Figure 24</strong>: Model of a
						design landscape that shows the use of
						agroforestry buffer zones between
						natural vegetation, contiguous natural
						forest, oil palm plantation and forest
						fragments. Retrieved from Koh et al.
						(2009, p. 435).
					</figcaption>
				</figure>
			</div>
		</main>
	);
}
