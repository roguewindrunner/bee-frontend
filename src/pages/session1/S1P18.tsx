import S1F20 from "@/assets/S1/SDG.png";
import InfoBox from "@/components/InfoBox";
export default function S1P20() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="mb-0 md:mb-8 border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Reconciling Human Welfare and the
						Environment – Ways for More
						Sustainable Oil Palm Cultivation?
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Sustainable Development Goals (SDGs)
					</span>
				</h1>

				<figure className="text-center">
					<img
						src={S1F20}
						alt=""
						className="mx-auto"
					/>
					<ol className="list-decimal mt-4 pl-6 text-left list-outside ">
						<li>
							<strong>NO POVERTY </strong>– End
							poverty in all its forms everywhere.
						</li>
						<li>
							<strong>ZERO HUNGER </strong>– End
							hunger, achieve food security and
							improved nutrition and promote
							sustainable agriculture.
						</li>
						<li>
							<strong>
								GOOD HEALTH AND WELL-BEING{" "}
							</strong>{" "}
							– Ensure healthy lives and promote
							well-being for all at all ages.
						</li>
						<li>
							<strong>QUALITY EDUCATION </strong>–
							Ensure inclusive and equitable
							quality education and promote
							lifelong learning opportunities for
							all.
						</li>
						<li>
							<strong>GENDER EQUALITY </strong>–
							Achieve gender equality and empower
							all women and girls.
						</li>
						<li>
							<strong>
								CLEAN WATER AND SANITATION{" "}
							</strong>
							– Ensure availability and
							sustainable management of water and
							sanitation for all.
						</li>
						<li>
							<strong>
								AFFORDABLE AND CLEAN ENERGY
							</strong>
							– Ensure access to affordable,
							reliable, sustainable and clean
							energy for all.
						</li>
						<li>
							<strong>
								DECENT WORK AND ECONOMIC GROWTH{" "}
							</strong>
							– Promote sustained, inclusive and
							sustainable economic growth, full
							and productive employment and decent
							work for all.
						</li>
						<li>
							<strong>
								INDUSTRY, INNOVATION AND
								INFRASTRUCTURE –{" "}
							</strong>
							Build resilient infrastructure,
							promote inclusive and sustainable
							industrialization and foster
							innovation.
						</li>
						<li>
							<strong>
								REDUCED INEQUALITIES{" "}
							</strong>
							– Reduce inequality within and among
							countries
						</li>
						<li>
							<strong>
								SUSTAINABLE CITIES AND COMMUNITIES{" "}
							</strong>
							– Make cities and human settlements
							inclusive, safe, resilient and
							sustainable.
						</li>
						<li>
							<strong>
								RESPONSIBLE CONSUMPTION AND
								PRODUCTION{" "}
							</strong>
							– Ensure sustainable consumption and
							production patterns.
						</li>
						<li>
							<strong>CLIMATE ACTION </strong>–
							Take urgent action to combat climate
							change and its impacts.
						</li>
						<li>
							<strong>LIFE BELOW WATER </strong>–
							Conserve and sustainably use the
							oceans, seas and marine resources
							for sustainable development.
						</li>
						<li>
							<strong>LIFE ON LAND </strong>–
							Protect, restore and promote
							sustainable use of terrestrial
							ecosystems, sustainably manage
							forests, combat desertification, and
							halt and reverse land degradation
							and halt biodiversity loss.
						</li>
						<li>
							<strong>
								PEACE, JUSTICE AND STRONG
								INSTITUTIONS{" "}
							</strong>
							– Promote peaceful and inclusive
							societies for sustainable
							development, provide access to
							justice for all and build effective,
							accountable and inclusive
							institutions at all levels.
						</li>
						<li>
							<strong>
								PARTNERSHIPS FOR THE GOALS{" "}
							</strong>
							– Strengthen the means of
							implementation and revitalize the
							global partnership for sustainable
							development.
						</li>
					</ol>
					<figcaption className="poppins text-center text-xs md:text-xl py-4">
						<strong>Figure 20</strong>: Figure 20:
						Adapted from{" "}
						<a
							className="text-sky-500 underline break-all md:break-keep"
							href="https://www.globaleslernen.de/sites/default/files/files/link-elements/complete-guidebook_textbooks-for-sustainable-development_2.pdf"
							target="_blank"
							rel="noopener noreferrer">
							UNESCO MGIEP (2017, p. 14).
						</a>
					</figcaption>
				</figure>
				<InfoBox>
					<ul className="list-disc pl-4 list-outside">
						<li>
							You can find more information here:{" "}
							<a
								className="text-sky-500 underline break-all md:break-keep"
								href="https://sdgs.un.org/goals"
								target="_blank"
								rel="noopener noreferrer">
								https://sdgs.un.org/goals
							</a>
						</li>
						<li>
							Also check the SDG APP:{" "}
							<a
								className="text-sky-500 underline break-all md:break-keep"
								href="https://sdgsinaction.com"
								target="_blank"
								rel="noopener noreferrer">
								https://sdgsinaction.com
							</a>
						</li>
					</ul>
				</InfoBox>
			</div>
		</main>
	);
}
