import S1F14 from "@/assets/figure1.png";

export default function S1P8() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Impacts of Oil Palm Cultivation
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Infoslide: Impacts of Oil Palm
						Cultivation
					</span>
				</h1>

				<p className="poppins md:text-xl">
					Indonesia’s oil palm boom began in 2000,
					which had far reaching consequences for
					the local population (Grass et al.,
					2020). Due to the oil palm boom, poverty
					rates were reduced at local, regional
					and national level (Grass et al., 2020;
					Qaim et al., 2020). For example, some
					farmers converted some of their land
					into oil palm plantations, and
					unemployed people were able to find
					employment through new jobs in the oil
					palm sector (Clough et al., 2016). The
					economic growth from oil palm
					cultivation also improved food security
					and nutrition as well as rural
					infrastructure (Qaim et al., 2020).
					Higher incomes, especially of
					smallholders, can be linked to higher
					expenditure on health, education and
					consumer goods (ibid.). However, not all
					population groups benefit from the oil
					palm boom in the same way or even not at
					all. Experiences of farmers in the
					agriculture market from previous
					cultivation of other crops can lead to
					advantages in comparison to new farmers
					without any experiences.
				</p>

				<p className="poppins md:text-xl">
					There are also socioeconomic
					(combination of social and economic
					factors) downsides, such as
					disadvantages for some population groups
					leading to rising inequality and social,
					societal, and political tensions
					(ibid.). For example, there are
					conflicts regarding (unclear) land
					property and worker rights (e.g.,
					production contracts between industrial
					companies and smallholders). Also, less
					women work in the oil palm sector than,
					e.g., in rubber cultivation, which may
					lead to changed gender roles and unequal
					opportunities (Chrisendo et al., 2019).
					Some socioeconomic problems are also
					linked to environmental impacts of oil
					palm cultivation, such as the use of too
					much agrochemicals, like fertilizer and
					herbicides. So, let’s consider the
					environmental impacts of oil palm
					cultivation first. We will get more into
					socioeconomic research in Session II.{" "}
				</p>

				<div className="flex flex-col items-center justify-between text-xs text-neutral-800 text-center px-auto py-8 mx-auto">
					<figure className="border-2 border-primary rounded-md bg-primary/[.10] p-8">
						<img
							src={S1F14}
							alt="Oil Palm Yield"
						/>
						<figcaption>
							<strong>Figure 14</strong>: Oil Palm
							Yield. (Photo: Sibhatu, n.d.).
						</figcaption>
					</figure>
				</div>
			</div>
		</main>
	);
}
