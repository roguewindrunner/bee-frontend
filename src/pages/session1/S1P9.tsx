import S1F15 from "@/assets/S1/S1F15.png";
import S1F16 from "@/assets/S1/S1F16.png";
import InfoBox from "@/components/InfoBox";

export default function S1P9() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Impacts of Oil Palm Cultivation
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Infoslide: Impact of Oil Palm
						Cultivation - Driver of Deforestation
					</span>
				</h1>

				<p className="poppins md:text-xl">
					There is contradictory information on to
					what extent oil palm cultivation is a
					driver of deforestation. While few
					sources allot oil palm cultivation a
					small role in the worldwide forest loss,
					other studies suggest that oil palm
					expansion is a significant cause for
					forest loss in Southeast Asia (e.g.,
					Gaveau et al. 2016; Meijaard et al.,
					2018).
				</p>

				<p className="poppins md:text-xl">
					However, mature oil palms – in contrast
					to young oil palm – can also be carbons
					sinks (Meijide et al., 2020). According
					to Guillaume et al. (2018), oil palm
					cultivation is an efficient form of
					land-use regarding yield per unit of
					carbon storage loss.
				</p>
				<InfoBox>
					<p className="poppins text-xs md:text-sm mb-2">
						Important to note for the review and
						interpretation of the literature and
						data on deforestation is that it is
						crucial do understand the context:
					</p>
					<p className="poppins text-xs md:text-sm">
						What are the exact research
						question(s), object(s), and design?
						Which definitions are used, e.g., for
						forest and land-use types? Which
						land-use transformation processes are
						investigated in the study?
					</p>
				</InfoBox>
				<p className="poppins md:text-xl">
					However, overall, it can be stated that
					oil palm cultivation in smallholder and
					industrial plantations is a driver of
					deforestation (Grass et al., 2020), as
					you can see in the two exemplary figures
					on this slide.
				</p>

				<figure className="flex flex-col lg:flex-row space-x-8 text-center mb-4">
					<img
						src={S1F15}
						alt=""
						className="mx-auto"
					/>
					<figcaption className="poppins text-center text-xs md:text-md py-4">
						<strong>Figure 15</strong>: This
						diagram shows the land cover changes
						and agricultural transitions (%) from
						1990 to 2013 in Jambi Province,
						Sumatra, Indonesia. It is based on
						remote sensing data and does not
						include intermediary steps (for
						example, transitions from rainforest
						to rubber to oil palm). Retrieved from
						Grass et al. (2020, p. 3).
					</figcaption>
				</figure>
				<figure className="text-center mb-4">
					<img
						src={S1F16}
						alt=""
						className="mx-auto"
					/>
					<figcaption className="poppins text-center text-xs md:text-md py-4">
						<strong>Figure 16</strong>: Driver of
						deforestation in Indonesia by Ritchie
						and Roser (2021). Find more data
						figures on
						https://ourworldindata.org/palm-oil.
					</figcaption>
				</figure>
			</div>
		</main>
	);
}
