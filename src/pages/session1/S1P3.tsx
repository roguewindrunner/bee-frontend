import S1F3 from "@/assets/S1/S1F3.png";
import S1F4 from "@/assets/S1/S1F4.png";
import S1F5 from "@/assets/S1/S1F5.png";
import InfoBox from "@/components/InfoBox";

export default function S1P3() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className=" border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Suitability and Density of Oil Palm
						Cultivation in Southeast Asia
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Infoslide: Density of Oil Palm
						Plantation in Southeast Asia
					</span>
				</h1>
				<figure className="text-center ">
					<img
						src={S1F3}
						alt=""
						className="mx-auto mb-4"
					/>
					<figcaption className="poppins text-center text-xs md:text-lg py-4">
						<strong>Figure 3</strong>: The two
						density maps above show the density of
						industrial oil palm plantations (left)
						and of smallholder plantations
						(right). The maps have a spatial
						resolution of 10 km and represent the
						surface of closed-canopy oil palm, in
						hectares, in an area of 109 hectares
						(Descals et al., 2021).
					</figcaption>
				</figure>
				<InfoBox>
					<p className="poppins text-left py-2 text-sm md:text-md">
						Oil palm plantations can have either
						of two forms: smallholder or
						industrial plantations. In Indonesia,
						oil palm plantations which cultivate
						less than 25 ha are labeled
						smallholdings. Industrial plantations
						can cover thousands of hectares and
						represent ca. 67 % of the plantation
						area in Indonesia (Meijaard, 2018;
						Descals et al., 2021).
					</p>
				</InfoBox>

				<div className="flex flex-col md:flex-row mb-4 gap-4 ">
					{" "}
					<figure className="text-center md:max-w-[50%]">
						<img
							src={S1F4}
							alt=""
							className="mx-auto"
						/>
						<figcaption className="poppins text-center text-xs md:text-md py-4">
							<strong>Figure 4</strong>: Aerial
							photo of large-scale industrial
							plantation in Jambi province.
						</figcaption>
					</figure>
					<figure className="text-center md:max-w-[50%]">
						<img
							src={S1F5}
							alt=""
							className="mx-auto"
						/>
						<figcaption className="poppins text-center text-xs md:text-md py-4">
							<strong>Figure 5</strong>:
							Smallholder plantation in Jambi
							province.
						</figcaption>
					</figure>
				</div>
			</div>
		</main>
	);
}
