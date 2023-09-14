import S1F22 from "@/assets/S1/S1F22.png";
export default function S1P21() {
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
						Infoslide: High Conservation Value
						Areas
					</span>
				</h1>
				<p className="poppins md:text-xl">
					An international approach to reduce the
					negative impacts of land-use
					transformations on the environment is to
					identify and protect areas with a high
					conservation value (HCV). High
					conservation value is a “biological,
					ecological, social or cultural value of
					outstanding significance or critical
					importance at the national, regional or
					global scale” (Persey et al., 2011).
					According to Delabre et al. (2018),
					there are six categories of HCV:
					<ol className="poppins space-y-4 lg:space-y-0 text-left py-4 list-decimal list-outside ml-6 px-4 md:text-xl">
						<li>
							Biodiversity: Concentrations of
							biological diversity, including
							rare, threatened or endangered
							species
						</li>
						<li>
							Landscapes: Landscape-level
							ecosystems and mosaics, including
							intact forest landscapes
						</li>
						<li>
							Ecosystems: Rare, threatened, or
							endangered ecosystems, habitats or
							refugia
						</li>
						<li>
							Ecosystem services: Basic ecosystem
							services in critical situations,
							including water catchments
						</li>
						<li>
							Livelihoods: Sites and resources
							fundamental for satisfying the basic
							necessities of local communities or
							indigenous peoples
						</li>
						<li>
							Cultural identity: Sites, resources,
							habitats and landscapes of global or
							national cultural, archaeological or
							historical significance
						</li>
					</ol>
				</p>

				<figure className="text-center">
					<img
						src={S1F22}
						alt=""
						className="mx-auto"
					/>
					<figcaption className="poppins text-center text-xs md:text-xl py-4">
						<strong>Figure 22</strong>: EFForTS
						Landscape Assessment – rainforest
						(left) versus oil palm plantation
						(right). Picture credit: Ananggadipa
						Raswanto
					</figcaption>
				</figure>
				<p className="poppins md:text-xl">
					HCV areas are areas in which an
					identified value is focused and
					supported by management. They can be for
					example ecosystems that cover a large
					part of a landscape or ecosystems that
					are threatened, rare or endangered
					(Brown et al., 2013).
				</p>
				<p className="poppins md:text-xl">
					However, there is also critique on the
					HCV approach. For example, Koh et al.
					(2009) argue that no clear guidelines
					exist to identify HCV areas, and on how
					to integrate HCV areas into oil palm
					management. Also, the implementing of
					HCV is depending on stakeholders’
					commitment. Strong commitment in terms
					of disclosure and monitoring of the HCV
					by farmers and companies is needed
					(Delabre et al., 2018).
				</p>
			</div>
		</main>
	);
}
