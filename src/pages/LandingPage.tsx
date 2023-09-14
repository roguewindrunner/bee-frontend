import {Link} from "react-router-dom";
import EFForTSLogo from "@/assets/Logo/efforts.png";
import NewEFForTSLogo from "@/assets/Logo/newlogo.png";
import DFGLogo from "@/assets/Logo/dfg.png";
import Figure1 from "@/assets/figure1.png";
import {useEffect, useState} from "react";
import ObjectiveCheckbox from "@/components/ObjectiveCheckbox";
import SessionComponent from "@/components/SessionComponent";

export default function LandingPage() {
	const [s1Complete, setS1Complete] =
		useState(false);
	const [s2Complete, setS2Complete] =
		useState(false);

	return (
		<div className="w-screen overflow-x-hidden flex flex-col poppins">
			<section
				id="landing-cover"
				className="relative w-full">
				{/* content */}
				<div className="p-4 flex flex-col gap-8 xl:max-w-screen-xl xl:mx-auto xl:py-8">
					{/* logo */}
					<span className="bg-zinc-50 py-2 px-4 bg-opacity-50 flex-none self-center lg:self-start flex gap-2 rounded-lg items-center">
						<img
							src={NewEFForTSLogo}
							alt=""
							className="w-8 h-8"
						/>
						<div className="w-px border rounded-full bg-zinc-300 border-zinc-300 self-stretch "></div>
						<img
							src={DFGLogo}
							alt=""
							className="h-6"
						/>
					</span>
					<div className="flex flex-col gap-8 lg:flex-row">
						{/* left side */}
						<div className="flex flex-col gap-8 lg:pl-4">
							<div className="flex items-center lg:items-start flex-col text-white mt-8 lg:mt-0 gap-4">
								{/* title */}
								<span className="text-4xl font-semibold montserrat text-center lg:text-left">
									Research-based Oil Palm
									Agroforestry:
								</span>
								<span className="text-center lg:text-left italic">
									How can tree enrichment
									contribute to sustainable oil
									palm cultivation?
								</span>
								<span className="text-center lg:text-left text-sm">
									- 1<sup>st</sup> Edition 2022 -
								</span>
							</div>

							{/* authors */}
						</div>

						{/* right side */}
						<div className="flex flex-col w-full bg-white bg-opacity-70 lg:bg-opacity-60 py-6 px-4 rounded-lg text-secondary gap-4 lg:text-xs lg:h-min lg:self-end">
							<p className="text-center lg:text-left font-bold">
								Learning unit on the EFForTS -{" "}
								<em>
									Biodiversity Enrichment
									Experiment (BEE)
								</em>
							</p>
							<p className="text-center lg:text-left">
								<strong>Topic:</strong>{" "}
								Research-based oil palm
								agroforestry (with a focus on
								Jambi province, Sumatra,
								Indonesia) and its potential to
								reconcile human welfare and the
								environment.
							</p>
							<p className="text-center lg:text-left">
								The research and the development
								of these educational resources is
								conducted within the framework of
								the{" "}
								<em>
									Collaborative Research Centre
									(CRC) 990 – <strong>E</strong>
									cological and Socioeconomic{" "}
									<strong>F</strong>
									unctions of Tropical Lowland
									Rain
									<strong>for</strong>
									est <strong>T</strong>
									ransformation <strong>S</strong>
									ystems.
								</em>{" "}
								EFForTS is funded and supported by
								the German Research Foundation
								(Deutsche Forschungsgemeinschaft;
								DFG).
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* Content */}
			<section className="w-full flex flex-col px-6 mt-8 gap-4 text-neutral-800 lg:max-w-screen-lg lg:mx-auto">
				<h1 className="mt-4 mb-8">
					<span className="block text-neutral-800 text-lg">
						Introduction to the Self-Learning
						Module on
					</span>
					<span className="text-3xl">
						Research-based Oil Palm Agroforestry
					</span>
				</h1>
				{/* TODO: Bold */}
				<p>
					With the help of this module, you will
					explore the potential of research-based
					oil palm agroforestry for{" "}
					<strong>
						sustainable oil palm cultivation.
					</strong>{" "}
					The module is mostly about oil palm
					cultivation in Jambi, Indonesia, but you
					will also learn about oil palm
					agroforestry in general.
				</p>
				<p>
					In <strong>Session I</strong>, you
					encounter the focal issue “oil palm
					cultivation and its impact on human
					welfare and the environment”, gain
					background knowledge on the needs for
					sustainable oil palm management, and
					learn about concepts, potentials and
					obstacles of approaches for reconciling
					human welfare and the environment.
				</p>
				<p>
					Then, in <strong>Session II</strong>,
					you engage with interdisciplinary
					research on oil palm agroforestry. The
					EFForTS Biodiversity Enrichment
					Experiment (BEE) is introduced. Based on
					your analysis of the current research
					status, you (theoretically) design an
					own research-based palm agroforestry
					system concept.
				</p>
				<p>
					In <strong>Session III</strong>, you
					take the role as a science communicator.
					You synthesise key ideas and your gained
					knowledge to enrich the existing
					information campaign on oil palm
					agroforestry for farmers or further
					target groups of the public. Finally, it
					is time for reflection of the module and
					(peer-)review of your science
					communication media.
				</p>
				<p>
					<strong>
						Follow this self-learning module page
						by page
					</strong>{" "}
					to not miss out on any information.
					There is enough room for you to write
					down your answers immediately. You can
					double-click on the green boxes to type
					in your answer. If you should ever need
					more space, feel free to use additional
					pages. You can follow the links behind
					the figures, QR, videos codes by right
					clicking à open link.
				</p>
				<ul className="list-disc list-outside pl-4">
					<li>
						<strong>Overarching activity</strong>:
						The design of a science communication
						media (e.g., infographic/poster,
						popular article, video/interview) on
						research-based oil palm agroforestry
						should serve as final group assignment
						for this module.
					</li>
					<li>
						<strong>Hint for tasks</strong>: Some
						tasks are specifically asking for your
						pre-knowledge. Don’t worry if you have
						few ideas, you can return to these
						tasks later on and add or modify your
						answers. Furthermore, some tasks are
						open tasks. For open tasks, there
						might be neither correct nor wrong
						answers.
					</li>
					<li>
						Supplementary questions are no task.
						They should just serve as thinking
						stimuli for you.
					</li>
				</ul>
				<p>
					The sessions and the corresponding
					exemplary solutions are provided to you
					step by step.
				</p>
				<p>
					Enjoy working with this module and have
					fun making it your own experience with
					research-based oil palm agroforestry.
				</p>
				<p>Terima kasih.</p>
				<p>
					The authors of this booklet are open for
					questions or feedback at any time.
					<br />
					Contact your lecturers or{" "}
					<a
						href="mailto:finn-matthiesen@uni-goettingen.de"
						className="text-sky-500 underline">
						finn-matthiesen@uni-goettingen.de
					</a>
					.
				</p>
			</section>
			{/* Overall Learning Objectives Section */}
			<section className="bg-white py-4 mt-8 text-primary">
				<div className="w-full flex flex-col px-6 gap-4 lg:max-w-screen-lg lg:mx-auto">
					<h1 className="text-primary text-3xl mb-2">
						Overall Learning Objective
					</h1>
					<div className="text-center text-lg text-neutral-800">
						<p>
							The guiding questions of the module
							are:
						</p>
						<p>
							<em>
								How can tree enrichment contribute
								to sustainable oil palm
								cultivation?
							</em>
						</p>
						<p className="text-neutral-500">
							<em>
								In which way can research-based
								oil palm agroforestry be a
								solution to reconcile human
								welfare and the environment?
							</em>
						</p>
					</div>
					<p className="text-neutral-800">
						Below, you find an overview of what
						you will be able to do by the end of
						this unit. Tick the boxes on the
						right, if you feel you have
						accomplished the learning objective.
						There will also be specific learning
						objectives at the beginning of each
						session.
					</p>
					<div className="">
						<p className="text-lg font-semibold">
							Overall Learning Objectives
						</p>
						<p className="text-neutral-800 font-medium">
							By the end of this unit, you will be
							able to…
						</p>
						<div className="flex flex-col mt-8 gap-2">
							<ObjectiveCheckbox>
								Explain how oil palm cultivation
								impacts human welfare and the
								environment in Jambi province.
							</ObjectiveCheckbox>
							<ObjectiveCheckbox>
								Discuss potential solutions for
								sustainable oil palm cultivation.
							</ObjectiveCheckbox>
							<ObjectiveCheckbox>
								Describe the ongoing EFForTS
								Biodiversity Enrichment Experiment
								(BEE).
							</ObjectiveCheckbox>
							<ObjectiveCheckbox>
								Analyse interdisciplinary research
								on oil palm agroforestry,
								corresponding findings and
								formulate research gaps.
							</ObjectiveCheckbox>
							<ObjectiveCheckbox>
								Design your own oil palm
								agroforestry system concept.
							</ObjectiveCheckbox>
							<ObjectiveCheckbox>
								Analyse current information
								campaigns on and for oil palm
								agroforestry.
							</ObjectiveCheckbox>
							<ObjectiveCheckbox>
								Design your own science
								communication media on
								research-based oil palm
								agroforestry.
							</ObjectiveCheckbox>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-between text-xs text-neutral-800 text-center px-auto py-8 mt-16 mx-auto">
					<figure className="border-2 border-primary rounded-md bg-primary/[.10] p-8">
						<img
							src={Figure1}
							alt="Oil Palm Yield"
						/>
						<figcaption>
							<strong>Figure 1</strong>: Oil Palm
							Yield. (Photo: Sibhatu, n.d.).
						</figcaption>
					</figure>
				</div>
			</section>
			{/* Sessions Section */}
			{/*TODO: Lock icon and progress bar */}
			<section className="w-full py-8 px-4">
				<h1 className="text-quaternary border-none text-3xl text-center font-bold">
					Sessions
				</h1>
				<p className="font-medium text-center text-quaternary py-8">
					You have to finish the session before
					proceeding to the next session.
				</p>
				<div className="grid grid-cols-1 gap-y-4 gap-x-8 mt-2 md:grid-cols-3 lg:max-w-screen-lg lg:mx-auto">
					{[
						{
							title: "Session I",
							prev_sesh_state: true,
							caption:
								"Impacts of Oil Palm Cultivation - How to Reconcile Human Welfare and the Environment",
							to: "/session1",
						},
						{
							title: "Session II",
							prev_sesh_state: s1Complete,
							caption:
								"Research on Tree Enrichment in Oil Palm Plantation - How can agroforestry system be designed based on scientific evidence",
							to: "/session2",
						},
						{
							title: "Session III",
							prev_sesh_state: s2Complete,
							caption:
								"Science Communication - How can research-based oil palm agroforestry knowledge be made available to farmers and the society",
							to: "/session3",
						},
					].map((item, i) => (
						//
						<SessionComponent item={item} />
					))}
				</div>
			</section>
			<footer className="w-full bg-primary py-4"></footer>
		</div>
	);
}
