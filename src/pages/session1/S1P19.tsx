import S1F20 from "@/assets/S1/SDG.png";
import InfoBox from "@/components/InfoBox";
import Task9 from "@/components/tasks/session1/Task9";
import Task10 from "@/components/tasks/session1/Task10";
import Task11 from "@/components/tasks/session1/Task11";
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
						The Need for More Sustainable Oil Palm
						Cultivation?
					</span>
				</h1>
				<Task9 />
				<InfoBox>
					<div className="flex flex-col gap-2">
						<p className="poppins text-xs md:text-sm">
							Sustainable development is
							development that meets the needs of
							the present without compromising the
							ability of future generations to
							meet their own needs.“
						</p>
						<p className="poppins text-right text-xs md:text-sm">
							Brundtland Report -{" "}
							<a
								className="text-sky-500 underline break-keep"
								href="https://sustainabledevelopment.un.org/content/documents/5987our-common-future.pdf"
								target="_blank"
								rel="noopener noreferrer">
								Our Common Future
							</a>{" "}
							(1987, p. 467)
						</p>
					</div>
				</InfoBox>
				<Task10 />
				<Task11 />
			</div>
		</main>
	);
}
