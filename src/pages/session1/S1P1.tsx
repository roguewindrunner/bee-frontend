import ObjectiveCheckbox from "@/components/ObjectiveCheckbox";
import Menti from "@/assets/menti.png";
import React from "react";
import {Link} from "react-router-dom";

export default function S1P1() {
	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<p>
				In this first session, you encounter the
				focal issue “oil palm cultivation and its
				impact on human welfare and the
				environment”, gain background knowledge on
				the needs for sustainable oil palm
				management and learn about concepts,
				potentials and obstacles of approaches for
				reconciling human welfare and the
				environment.
			</p>
			<div className="gap-2 ">
				<h2 className="text-2xl font-semibold text-primary poppins">
					Overall Learning Objectives
				</h2>
				<p className="poppins font-medium">
					By the end of this chapter, you will be
					able to:
				</p>
			</div>

			{/* Objective Checkboxes */}
			<div className="flex flex-col gap-4">
				<ObjectiveCheckbox>
					Understand growth conditions and
					suitability of cultivating oil palm in
					Indonesia
				</ObjectiveCheckbox>
				<ObjectiveCheckbox>
					Explain how oil palm cultivation impacts
					human welfare and the environment in
					Jambi province
				</ObjectiveCheckbox>
				<ObjectiveCheckbox>
					Formulate a problem statement on the
					needs for more sustainable oil palm
					management
				</ObjectiveCheckbox>
				<ObjectiveCheckbox>
					Discuss potentials and obstacles of
					different approaches solutions for
					reconciling human welfare and the
					environment
				</ObjectiveCheckbox>
			</div>
			<div className="py-6">
				<h1 className="text-primary mb-10">
					World Cloud - Oil palm Cultivation
				</h1>
				<p>
					Before you start working with the unit,
					we would like to know what comes to your
					mind when you think of oil palm
					cultivation.
				</p>
				<ul className="list-disc pl-6">
					<li className="my-4">
						Please participate in the Word Cloud
						by submitting your answers (in English
						or Bahasa Indonesia) under the
						following link:{" "}
						<a
							className="text-sky-500 underline break-all"
							href="https://www.menti.com/4sbnpzhry7"
							target="_blank"
							rel="noopener noreferrer">
							https://www.menti.com/4sbnpzhry7
						</a>{" "}
						or go to
						<strong>www.menti.com</strong> and use
						the code <strong>8024 3447</strong>
					</li>
					<img src={Menti} alt="" />
					<li className="my-4">
						The results will be sent to you in a
						few days, when you submit your e-mail.
						We will also upload the final Word
						Cloud into the “Solutions Session I”
						folder.
					</li>
				</ul>
			</div>
		</main>
	);
}
