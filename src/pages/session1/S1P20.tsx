import S1F21 from "@/assets/S1/S1F21.png";
export default function S1P20() {
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
						Ways for More Sustainable Oil Palm
						Cultivation
					</span>
				</h1>
				<p className="poppins md:text-xl">
					There are different approaches for
					(more) sustainable oil palm cultivation.
					Some of these concepts and ways will be
					presented to you shortly on the next
					slides. Other approaches related to
					plantation management practices
					consider, e.g., the amount of applied
					agrochemicals. Results of Darras et al.
					(2019) show the tendency that less
					herbicide and fertiliser input in oil
					palm plantation can benefit the
					biodiversity while having not
					significant decrease of yield. As
					mentioned on slide 18, the findings of
					Meijedi et al. (2020) suggest that the
					focus on plantation management with a
					focus long-term cultivation of oil palm
					(i.e., longer rotation cycles) can lead
					to greenhouse gas savings. “Longer
					rotation cycles, such as extending the
					plantation cycle to 30 or even 40 years
					compared to the conventional 25 years,
					or earlier yielding varieties have a
					substantial positive effect on
					greenhouse gas emissions – both
					scenarios are doable and relatively easy
					to implement” says Dr. Ana Meijide (
					<a
						className="text-sky-500 underline break-all md:break-keep"
						href="https://www.uni-goettingen.de/en/50225.html?id=5821"
						target="_blank"
						rel="noopener noreferrer">
						University of Göttingen, 2020
					</a>
					).
				</p>
				<p className="poppins md:text-xl">
					Now, let’s get into further approaches,
					which will be shortly described on the
					next slides.
				</p>

				<figure className="text-center mb-4">
					<img
						src={S1F21}
						alt=""
						className="mx-auto"
					/>
					<figcaption className="poppins text-center text-xs md:text-xl py-4">
						<strong>Figure 21</strong>: Figure 21:
						Tree enrichment in oil palm three
						years after planting. EFForTS BEE.{" "}
						<strong>Picture credit</strong>: Watit
						Kohkthong.
					</figcaption>
				</figure>
			</div>
		</main>
	);
}
