import S1F11 from "@/assets/S1/S1F11.png";
import S1F12 from "@/assets/S1/S1F12.png";
import S1F13 from "@/assets/S1/S1F13.png";
import InfoBox from "@/components/InfoBox";

export default function S1P7() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="mt-4 border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Impacts of Oil Palm Cultivation
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Infoslide: Land-Use Efficacy of
						Vegetable Oils in Comparisons
					</span>
				</h1>

				<div className="flex flex-col md:flex-row gap-4 justify-center md:gap-x-4">
					<p className="poppins text-sm md:text-md md:max-w-[33%] justify mx-auto">
						As shown in the figures on this slide,
						oil palm can be labelled as the oil
						crop with the highest land-use
						efficacy in comparison to other crops
						for vegetable oil.
					</p>
					<figure className="flex flex-col lg:flex-row lg:space-x-4 justify-center text-center mb-4">
						<img
							src={S1F11}
							alt=""
							className="mx-auto"
						/>
						<figcaption className="poppins text-center text-xs md:text-md">
							<strong>Figure 11</strong>: Land-use
							efficacy of the most prominent oil
							crops (Meijaard et al., 2018, p. 9).
						</figcaption>
					</figure>
				</div>
				<span className="border-dashed border-quinary border-2 my-4"></span>
				<figure className="flex flex-col lg:flex-row space-y-4 md:space-y-0 lg:space-x-8 justify-center text-center mb-4">
					<img
						src={S1F12}
						alt=""
						className="mx-auto"
					/>
					<figcaption className="poppins text-center text-xs md:text-md">
						<strong>Figure 12</strong>: The two
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
				<span className="border-dashed border-quinary border-2"></span>
				<figure className="text-center mb-4">
					<img
						src={S1F13}
						alt=""
						className="mx-auto"
					/>
					<figcaption className="poppins text-center text-xs md:text-md py-4">
						<strong>Figure 13</strong>: Figure 13:
						Land-use efficacy of vegetable oils by
						Ritchie and Roser (2021).{" "}
						<span className="block">
							Find more data figures on{" "}
							<a
								className="text-sky-500 underline break-keep"
								href="https://ourworldindata.org/palm-oil"
								target="_blank"
								rel="noopener noreferrer">
								https://ourworldindata.org/palm-oil.
							</a>
						</span>
					</figcaption>
				</figure>
			</div>
		</main>
	);
}
