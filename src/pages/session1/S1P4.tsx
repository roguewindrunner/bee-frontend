import S1F6 from "@/assets/S1/S1F6.png";
import S1F7 from "@/assets/S1/S1F7.png";

export default function S1P4() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Suitability and Density of Oil Palm
						Cultivation in Southeast Asia
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Infoslide: Suitability of Oil Palm
						Cultivation in Southeast Asia
					</span>
				</h1>
				<p className="poppins text-sm md:text-xl">
					The remote sensing researchers Khiabani
					and Takeuchi (2018) investigated the
					suitability of oil palm cultivation in
					Indonesia (and Malaysia) regarding
					annual rainfall, topography and the
					overall availability of land for oil
					palm plantation (e.g., excluding
					protected areas). Overall, Khiabani &
					Takeuchi (2018) concluded that around
					51% of the area in Indonesia is suitable
					for oil palm cultivation - under the
					right climatic conditions.
				</p>
				<figure className="text-center mb-4">
					<img
						src={S1F6}
						alt=""
						className="mx-auto mb-4"
					/>
					<img
						src={S1F7}
						alt=""
						className="mx-auto"
					/>
					<figcaption className="poppins text-center text-xs md:text-lg py-4">
						<strong>Figure 6-7</strong>: Retrieved
						from Khiabani and Takeuchi (2018, p.
						7f.).
					</figcaption>
				</figure>
			</div>
		</main>
	);
}
