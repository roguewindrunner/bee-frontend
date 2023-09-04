import Task1 from "@/components/tasks/session1/Task1";
import Task2 from "@/components/tasks/session1/Task2";
import Task7 from "@/components/tasks/session1/Task7";
import React from "react";

import {Link} from "react-router-dom";

export default function S1P2() {
	return (
		<main className="w-full text-slate-800 px-6 py-4 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<div className="my-1 lg:my-4 flex flex-col gap-6 lg:gap-8">
				<h1 className="montserrat txt-4xl">
					Impacts of Oil Palm Cultivation
				</h1>

				<Task7 />
			</div>
		</main>
	);
}
