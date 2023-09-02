import S1F11 from "@/assets/S1/S1F11.png";
import S1F12 from "@/assets/S1/S1F12.png";
import S1F13 from "@/assets/S1/S1F13.png";
import InfoBox from "@/components/InfoBox";
import Task3 from "@/components/tasks/session1/Task3";

export default function S1P5() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="mt-4 border-0 montserrat">
					<span className="block text-primary md:text-lg text-sm">
						Suitability and Density of Oil Palm
						Cultivation in Southeast Asia
					</span>
					<span className="text-neutral-800 md:text-3xl text-lg">
						Infoslide: Land-Use Change on Sumatra
					</span>
				</h1>
				{/* TODO: Separate Task 3 and Task 5 */}
				<Task3 />
				<InfoBox>
					<div className="text-sm flex flex-col gap-2">
						<p>
							<strong>
								How to: Critically Assess Sources
								of Information
							</strong>
						</p>
						<p>
							Information literacy is important
							when dealing with science learning
							and socioscientific issues
							(Klosterman & Sadler, 2008).
							Whenever you are confronted with
							given information, you should ask
							yourself the following questions
							(adapted from{" "}
							<a
								className="text-sky-500 underline break-all md:break-keep"
								href="https://libraries.missouristate.edu/assets/libraries/informationlitguide.pdf"
								target="_blank"
								rel="noopener noreferrer">
								Missouri Edu, 2012;
							</a>
							<a
								className="text-sky-500 underline break-all md:break-keep"
								href="https://libraryguides.missouri.edu/SW7340/evaluatingsources"
								target="_blank"
								rel="noopener noreferrer">
								2022
							</a>
							):
						</p>
						<ol className="list-decimal list-inside flex flex-col gap-2">
							<li>
								<span>
									Addressers and Addressees:
								</span>
								<ul className="list-disc pl-4">
									<li>
										Who (person) or what (company,
										organisation) is presenting
										the information?
									</li>
									<li>
										What expertise and motifs
										might the addressers have?
									</li>
									<li>
										What is the purpose of the
										source?
									</li>
								</ul>
							</li>
							<li>
								<span>Representation:</span>
								<ul className="list-disc pl-4">
									<li>
										Does the information presented
										seem accurately reported (does
										not leave important
										information out or present
										unnecessary information)?
									</li>
									<li>
										What creative elements are
										used to attract/distract my
										attention? Why?
									</li>
								</ul>
							</li>
							<li>
								<span>Evidence:</span>
								<ul className="list-disc pl-4">
									<li>
										Is the information supported
										by evidence from research?
									</li>
									<li>
										If there is evidence, who is
										paying for the research behind
										the evidence?
									</li>
								</ul>
							</li>
						</ol>
					</div>
				</InfoBox>
			</div>
		</main>
	);
}
