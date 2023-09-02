import S1F25 from "@/assets/S1/S1F25.png";
export default function S1P24() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="mt-4 mb-8">
					<span className="text-3xl">
						Take home message of Session I
					</span>
				</h1>

				<p className="poppins md:text-xl">
					There are different land-use approaches
					for balancing human welfare and the
					environment to maintain high yield while
					protecting, conserving and enhancing
					ecosystem functions.
				</p>
				<p className="poppins md:text-xl">
					Besides the presented approaches, there
					are more current approaches in
					discussion and research-based
					development. For example, forestry
					multi-business with oil palm, that is
					still in political and academical
					discussion. Also, intercropping is seen
					as a high potential,
					environmentally-wise alternative to
					established oil palm monoculture“,
					especially for young oil palm
					cultivation (Dhandapani et al., 2020, p.
					1).
				</p>
				<p className="poppins md:text-xl">
					Collaborative farm-modelling for
					reconciling socioeconomic and ecological
					functions is also a promising
					research-based approach currently
					investigated and developed by EFForTS
					researchers (
					<a
						className="text-sky-500 underline break-keep"
						href="https://www.uni-goettingen.de/en/618837.html"
						target="_blank"
						rel="noopener noreferrer">
						EFForTS C12 – Carola Paul
					</a>
					). This approach takes the high
					heterogeneity of farmer’s needs, local
					conditions, and many other socioeconomic
					and ecological aspects into account.
				</p>
				<figure className="text-center">
					<img
						src={S1F25}
						alt=""
						className="mx-auto"
					/>
					<figcaption className="poppins text-xs md:text-xl py-4">
						<strong>Figure 25:</strong>
						Collaborative modelling with local
						stakeholder: Which degree of land-use
						diversification (ranging from
						monocultures, block-mixtures to
						agroforestry systems) might contribute
						to mitigating ecological-socioeconomic
						trade-offs? (
						<a
							className="text-sky-500 underline break-all md:break-keep"
							href="https://www.uni-goettingen.de/en/618837.html"
							target="_blank"
							rel="noopener noreferrer">
							EFForTS C12 – Carola Paul
						</a>
						). Photo: Peter Glatzle
					</figcaption>
				</figure>
				<p className="poppins md:text-xl">
					However, in this unit and the following
					two sessions, we will mainly focus on
					research-based oil palm agroforestry.
				</p>
			</div>
		</main>
	);
}