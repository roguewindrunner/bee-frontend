import {useEffect, useState} from "react";
import {
	Link,
	useLocation,
} from "react-router-dom";

interface pageDesc {
	page: number;
	title: string;
	element: Function;
}

export default function TableOfContents({
	items,
}: any) {
	const [open, setOpen] = useState(false);

	const toggleDropdown = () => {
		setOpen(!open);
	};
	const location = useLocation();

	useEffect(() => {
		// Auto-show when viewport is large
		const mediaQuery = window.matchMedia(
			"(min-width: 768px)"
		);
		const handleMediaChange = (e: any) => {
			if (e.matches) {
				setOpen(true);
			} else {
				setOpen(false);
			}
		};

		mediaQuery.addEventListener(
			"change",
			handleMediaChange
		);
		handleMediaChange(mediaQuery);

		return () => {
			mediaQuery.removeEventListener(
				"change",
				handleMediaChange
			);
		};
	}, []);
	return (
		<div className="bg-octonary p-4 mx-6 mt-6 md:mt-8 md:mx-4 rounded-lg ">
			<h1
				className="poppins text-primary p text-md md:text-xl cursor-pointer flex flex-row justify-between"
				onClick={toggleDropdown}>
				<span className="">Contents</span>
				<svg
					className={`h-6 w-6 transition-transform transform ${
						open
							? "rotate-0 translate-y-1 translate-x-1"
							: "rotate-180"
					}`}
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
				</svg>
			</h1>
			{open && (
				<div className="max-h-[40vh] overflow-y-scroll">
					<ul className="poppins md:text-xs pt-4 text-black">
						{items.map((item: pageDesc) => {
							return location.pathname ===
								`/session1/page${item.page}` ? (
								<li className="pb-4 font-bold">
									<Link to={`./page${item.page}`}>
										{item.title}
									</Link>
								</li>
							) : (
								<li className="pb-4 font-light">
									<Link to={`./page${item.page}`}>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
