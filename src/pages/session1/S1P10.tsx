import S1F18 from "@/assets/S1/S1F18.png";
import S1F17 from "@/assets/S1/S1F17.png";
import InfoBox from "@/components/InfoBox";

export default function S1P10() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="mt-4 border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Impacts of Oil Palm Cultivation
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Infoslide: Impact of Oil Palm
						Cultivation on Environment
					</span>
				</h1>

				<p className="poppins md:text-xl">
					Deforestation and land-use change for
					oil palm expansion have resulted in
					greenhouse gas emissions, forest and
					peatland fires and local climate warming
					(cf. Clough et al., 2016; Sabajo et al.,
					2017; Meijide et al., 2018; Guillaume et
					al., 2018) – mainly because of land
					transformation. Different phases of the
					oil palm cultivation cycle can cause the
					release of the potent greenhouse gases
					nitrous oxide and methane (Meijaard et
					al., 2018).
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
				<p className="poppins md:text-xl">
					Then again, oil palm cultivation and
					plantation management can lead to air,
					soil and water pollution, water cycling
					changes, water loss and land degradation
					(e.g., Clough et al., 2016, Dislich et
					al., 2017; Meijide et al., 2017; Röll et
					al., 2019).
				</p>
				<div className="flex flex-col lg:flex-row  px-6 gap-10 justify-between">
					<figure className="text-center mb-4">
						<img
							src={S1F17}
							alt=""
							className="mx-auto"
						/>
						<figcaption className="poppins text-center text-xs md:text-md py-4">
							<strong>Figure 18</strong>: EFForTS
							climate tower at PTPN VI. Photo:
							Christian Stiegler.
						</figcaption>
					</figure>
					<figure className="text-center mb-4">
						<img
							src={S1F18}
							alt=""
							className="mx-auto"
						/>
						<figcaption className="poppins text-center text-xs md:text-md py-4">
							<strong>Figure 17</strong>:
							Radiation sensors and view from flux
							tower over oil palm plantation in
							Jambi, Indonesia. Photo: Ana
							Meijide, University of Göttingen
							(2015)
						</figcaption>
					</figure>
				</div>
			</div>
		</main>
	);
}
