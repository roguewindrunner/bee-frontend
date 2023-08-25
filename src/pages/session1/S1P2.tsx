import Task1 from "@/components/tasks/session1/Task1";
import Task2 from "@/components/tasks/session1/Task2";
import React from "react";

import {Link} from "react-router-dom";

export default function S1P2() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="montserrat txt-4xl">
					Suitability and Density of Oil Palm
					Cultivation in Southeast Asia
				</h1>

				<p className="poppins md:text-xl">
					Since the beginning of the 20th century,
					oil palm has been cultivated on a large
					scale and commercially produced in
					plantations around the world (Meijaard
					et al., 2018). The total planted area of
					closed-canopy oil palm plantation around
					the world is estimated as 21 million
					hectares (MHa), for Southeast Asia as
					18,7 MHa and for Indonesia as 12 MHa
					(Descals et al., 2021). Exports from
					both countries account more than 85% of
					the global palm oil production (Qaim et
					al. 2020 based on FAO, 2019).
				</p>
				<Task1 />
				<Task2 />
			</div>
		</main>
	);
}
