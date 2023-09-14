import S1F10 from "@/assets/S1/S1F10.png";
import S1F9 from "@/assets/S1/S1F9.png";
import InfoBox from "@/components/InfoBox";

export default function S1P6() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto ">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="montserrat">
					<span className="block text-neutral-800  md:text-lg text-sm">
						Background Information
					</span>
					<span className="text-primary md:text-3xl text-lg">
						Impacts of Oil Cultivation{" "}
					</span>
				</h1>

				<div className="flex flex-col md:flex-row gap-4 justify-evenly md:gap-x-8">
					<div className="poppins flex flex-col gap-2 text-sm md:text-md md:max-w-[50%] justify mx-auto">
						<p>
							<strong>Task 4:</strong> On this and
							the following slides, you will find
							information on the impacts of palm
							cultivation.{" "}
							<strong className="italic">
								Take notes
							</strong>{" "}
							for the table on slide 23 on which
							you compile impacts of oil palm
							cultivation.
						</p>
						<p>
							The oil palm belongs to one of the
							most dominant and productive crops
							in the world (Formaglio, 2020). Oil
							palm (Elaeis guineensis) originates
							from West Africa. It thrives best in
							the zone of evergreen tropical
							rainforests on both sides of the
							equator. As its main product, the
							oil palm provides fruits on fresh
							fruit bunches that are harvested
							throughout the whole year.
						</p>
						<figure className="text-center mb-2">
							<img
								src={S1F9}
								alt=""
								className="mx-auto"
							/>
							<figcaption className="poppins text-center px-4 md:px-16 mt-4 text-xs">
								<strong>Figure 9</strong>: Fresh
								fruit bunches of oil palm
							</figcaption>
						</figure>
						<p>
							The orange fruits are pressed, and
							the oil is used in a variety of
							products, such as biofuel, cosmetics
							or processed food (for example in
							cereal, biscuits, peanut butter).
						</p>
						<p>
							Palm oil can be described as
							superior compared to other vegetable
							oils, due to the plant’s high yields
							combined with lower production and
							management costs (Carter et al.,
							2007; Clough et al., 2016). Global
							demand has risen by 45% during the
							last two decades. The area of oil
							palm plantations has expanded
							accordingly (Grass et al., 2020).
							Currently, Indonesia is the world’s
							biggest producer of palm oil, as it
							provides 57% of the global
							production (FAO, 2018). Given the
							rising demand for cheap oil for
							biofuel and food production, this
							percentage is projected to further
							expand in the future (Pirker et al.,
							2016).
						</p>
						<p>
							However, the oil palm boom leads to
							trade-offs between socio-economic
							and ecological functions(Clough et
							al. 2016), which we will encounter
							on the next slides.
						</p>
					</div>
					<div className="flex flex-col">
						<figure className="text-center mb-4 ">
							<img
								src={S1F10}
								alt=""
								className="mx-auto"
							/>
							<figcaption className="poppins text-center px-4 md:px-16 mt-4 text-xs md:text-sm">
								<strong>Figure 10</strong>:
								Infographic „Palm Oil Supply
								Chain“. Retrieved from Planet
								Experts, 2017.
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</main>
	);
}
