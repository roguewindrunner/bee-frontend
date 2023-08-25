import EFForTSLogo from "../assets/Logo/efforts.png";
import DFGLogo from "../assets/Logo/dfg.png";
import {
	Outlet,
	ScrollRestoration,
	useLocation,
	Link,
} from "react-router-dom";
import {useEffect, useState} from "react";
import session1 from "@/data/session1";
import AppendixMenu from "@/components/AppendixMenu";

export default function Session1() {
	const [currentPage, setCurrentPage] =
		useState(0);

	const location = useLocation();

	useEffect(() => {
		//retrieve page number
		const page = parseInt(
			location.pathname.match(
				/page(\d+)$/
			)?.[1] ?? "0"
		);

		setCurrentPage(page);

		//find object
		const title =
			session1.find((x) => x.page === page)
				?.title ?? "OPMX";

		//update title
		document.title = title;
	}, [location]);

	// TODO: #8 Move each page root element into this file

	return (
		<div className="w-screen overflow-x-hidden">
			<section
				id="landing-cover"
				className="relative w-full p-4 lg:shadow-xl lg:border-b-2 lg:border-primary">
				{/* content */}
				<div className="p-4 md:py-2 flex flex-col md:flex-row gap-2 xl:mx-auto relative lg:justify-between content-center">
					{/* logo */}

					<Link
						to="/"
						className="bg-zinc-50 py-2 px-2 bg-opacity-50 flex-none self-start lg:self-start flex gap-2 rounded-lg lg:rounded-md items-center">
						<img
							src={EFForTSLogo}
							alt=""
							className="w-4 h-4 lg:w-8 lg:h-8"
						/>
						<div className="border rounded-full bg-zinc-300 border-zinc-300 self-stretch "></div>
						<img
							src={DFGLogo}
							alt=""
							className="h-3 lg:h-6"
						/>
					</Link>

					{/* appendix */}
					<AppendixMenu />
				</div>

				<div className="flex flex-col gap-8 lg:mx-32 lg:px-16 lg:flex-row">
					{/* left side */}
					<div className="flex flex-col gap-8">
						<div className="flex items-center lg:items-start flex-col text-white lg:mt-8 lg:mt-0 gap-4">
							{/* title */}
							<span className="text-4xl font-semibold montserrat text-center lg:text-left">
								Session I:
							</span>
							<span className="text-center lg:text-2xl lg:text-left">
								Impacts of Oil Palm Cultivation -
								How to Reconcile Human Welfare and
								The Environment?
							</span>
						</div>

						{/* authors */}
					</div>
				</div>
			</section>
			<Outlet />
			{/* navigation */}
			<div className="flex flex-col text-xs gap-4 md:flex-row md:justify-between self-center w-full max-w-screen-lg mx-auto pb-4 px-4 poppins">
				{currentPage > 1 ? (
					<Link
						className=" btn-prev md:max-w-md md:self-stretch md:flex-grow-0 pl-4 hover:scale-[105%] ease-in-out duration-300"
						to={`./page${currentPage - 1}`}>
						<i className="bi bi-chevron-left"></i>
						<div className="flex flex-col justify-between w-[90%] lg:w-full">
							<p className="font-bold">
								Previous Page:
							</p>
							<p className="truncate">
								{session1.find(
									(x) =>
										x.page === currentPage - 1
								)?.title ?? ""}
							</p>
						</div>
					</Link>
				) : (
					<span></span>
				)}
				<Link
					className=" btn-next md:max-w-md md:self-stretch md:flex-grow-0 pr-4 hover:scale-[105%] ease-in-out duration-300"
					to={
						currentPage === session1.length
							? "./finish"
							: `./page${currentPage + 1}`
					}>
					<div className="flex flex-col justify-between w-[90%] lg:w-full">
						<p className="font-bold">
							Next Page:
						</p>
						<p className="truncate">
							{session1.find(
								(x) => x.page === currentPage + 1
							)?.title ?? "End of Course"}
						</p>
					</div>
					<i className="bi bi-chevron-right"></i>
				</Link>
			</div>
			<ScrollRestoration />
		</div>
	);
}
