import {Link} from "react-router-dom";
import EFForTSLogo from "@/assets/Logo/efforts.png";
import NewEFForTSLogo from "@/assets/Logo/newlogo.png";
import DFGLogo from "@/assets/Logo/dfg.png";
import image from "@/assets/pnf/peopleWithNet.svg";

export default function NotFoundPage() {
	return (
		<div className="w-screen h-screen overflow-x-hidden flex flex-col items-center lg:items-start justify-between montserrat gap-0 lg:gap-6 bg-primary">
			<Link
				to="/"
				className="bg-zinc-50 py-1 px-3 md:py-2 md:px-4 bg-opacity-50 flex-none flex gap-2 rounded-lg items-center m-4">
				<img
					src={NewEFForTSLogo}
					alt=""
					className="w-6 h-6 md:w-8 md:h-8"
				/>
				<div className="w-px border rounded-full bg-zinc-300 border-zinc-300 self-stretch "></div>
				<img
					src={DFGLogo}
					alt=""
					className="h-4 md:h-6"
				/>
			</Link>
			<div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mx-4 md:m-0 ">
				<img
					src={image}
					alt=""
					className="h-48 lg:h-full lg:self-end"
				/>
				<div className="flex flex-col gap-0 montserrat text-white text-center lg:text-start items-center lg:items-start justify-center lg:justify-start order-first lg:order-last lg:pb-32">
					<p className="text-5xl lg:text-9xl major-mono-display font-semibold">
						404
					</p>
					<p className="text-3xl lg:text-6xl font-semibold pl-2">
						Oops!!
					</p>
					<p className="text-xl lg:text-3xl font-seminold pl-2">
						Page Not Found
					</p>
					<p className="text-xs lg:text-sm my-4 pl-2">
						You ventured too far and got lost.
						It's time to go home.
					</p>
					<Link to="/">
						<button className="btn bg-primary-700 ease-in-out duration-300 self-start ml-2">
							Back Home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
