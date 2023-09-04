import Task8 from "@/components/tasks/session1/Task8";

import SDG1 from "@/assets/SDG/G_01.png";
import SDG2 from "@/assets/SDG/G_02.png";
import SDG3 from "@/assets/SDG/G_03.png";
import SDG4 from "@/assets/SDG/G_04.png";
import SDG5 from "@/assets/SDG/G_05.png";
import SDG6 from "@/assets/SDG/G_06.png";
import SDG7 from "@/assets/SDG/G_07.png";
import SDG8 from "@/assets/SDG/G_08.png";
import SDG9 from "@/assets/SDG/G_09.png";
import SDG10 from "@/assets/SDG/G_10.png";
import SDG11 from "@/assets/SDG/G_11.png";
import SDG12 from "@/assets/SDG/G_12.png";
import SDG13 from "@/assets/SDG/G_13.png";
import SDG14 from "@/assets/SDG/G_14.png";
import SDG15 from "@/assets/SDG/G_15.png";
import SDG16 from "@/assets/SDG/G_16.png";
import SDG17 from "@/assets/SDG/G_17.png";

export default function S1P17() {
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
						The Bigger Picture: Impact of Oil Palm
						Management on the SDGs
					</span>
				</h1>
				<p className="poppins md:text-xl">
					The Sustainable Development Goals (SDGs)
					are “an urgent call for action by all
					countries - developed and developing -
					in a global partnership” with respect to
					“peace and prosperity for people and the
					planet, now and into the future” –
					<a
						className="text-sky-500 underline break-all md:break-keep"
						href="sgds.un.org/goals"
						target="_blank"
						rel="noopener noreferrer">
						United Nations.
					</a>
				</p>
				<div className="grid grid-cols-6 gap-4">
					<img
						src={SDG1}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG2}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG3}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG4}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG5}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG6}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG7}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG8}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG9}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG10}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG11}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG12}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG13}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG14}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG15}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG16}
						alt=""
						className="mx-auto w-28"
					/>
					<img
						src={SDG17}
						alt=""
						className="mx-auto w-28"
					/>
				</div>
				<h1 className="poppins block border-0 text-primary md:text-lg text-md">
					Which impacts can Oil Palm Cultivation
					have on which SDGs?
				</h1>
				<Task8 />{" "}
			</div>
		</main>
	);
}
