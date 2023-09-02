import taxa from "@/assets/S1/S1F1xx.png";
import InfoBox from "@/components/InfoBox";

export default function S1P11() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="mt-4 border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Impacts of Oil Palm Cultivation
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Infoslide: Impact of Oil Palm
						Cultivation on Biodiversity
					</span>
				</h1>

				<p className="poppins md:text-xl">
					Biodiversity loss is also one
					consequence of the land-use change
					towards oil palm plantations; especially
					habitat loss due to deforestation and
					fire (Meijaard et al., 2018). Clough et
					al. (2016) observed that compared to
					natural rainforests, rubber cultivation,
					oil palm monocultures had the lowest
					overall species richness and a lower
					genetic diversity.
				</p>

				<p className="poppins md:text-xl">
					However, (Schulz et al., 2019) found
					that some protist groups had a higher
					diversity in oil palm plantations that
					in rainforest. According to the EFForTS
					key findings of the current ongoing
					research (2019), no loss in biodiversity
					because of conversion towards oil palm
					cultivation can be stated for birds
					(except for some species, see below) and
					bats as well as for soil bacteria and
					archaea (Schneider et al., 2015).
					Furthermore, generalists like pigs
					(food: oil seeds) and certain snakes
					(food: rodents) can profit from oil palm
					plantation (Meijaard et al., 2018).
				</p>
				<p className="poppins md:text-xl">
					In comparison, oil palm plantations have
					a higher abundance of invasive species,
					a different composition of biological
					communities and are far less
					structurally complex and diverse
					regarding the (understory) vegetation
					(e.g., Rembold et al., 2017). In a
					recent study, Grass et al. (2020)
					confirmed that the increase in profits
					from land use decreases the overall
					ecosystem functioning. It also affects
					local livelihoods, and it has far
					reaching consequences for the global
					climate (ibid.). The authors question
					the “long-term sustainability of ongoing
					economic development in this global
					biodiversity hotspot” (p. 6).
				</p>
				<img
					src={taxa}
					alt=""
					className="mx-auto"
				/>
				<InfoBox>
					<p>
						<strong>Hint:</strong> You will learn
						more on biodiversity research
						(findings) in Session II. Now, let us
						explore ecosystem functions of oil
						palm plantations.
					</p>
				</InfoBox>
			</div>
		</main>
	);
}
