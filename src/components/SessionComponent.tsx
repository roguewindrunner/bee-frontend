import React from "react";
import {Link} from "react-router-dom";

type Props = {
	item: {
		to: string;
		title: string;
		caption: string;
	};
};

/* const Progress_bar = () => {
	return .w-full.m-
}; */

export default function SessionComponent(
	props: Props
) {
	return (
		<Link to={props.item.to}>
			<button className="rounded-lg bg-white w-full shadow-lg hover:drop-shadow-2xl hover:scale-110 ease-in-out duration-300 hover:delay-150 flex flex-col flex-wrap p-6 gap-y-4 border border-gray-300 justify-between drop-shadow-lg text-left md:h-full">
				<div className="flex flex-col flex-start gap-y-2">
					<div className="flex flex-row w-full justify-between items-center">
						<p className="text-xl text-septenary font-semibold">
							{props.item.title}
						</p>
						<span className="w-10 h-10 rounded-full bg-tertiary text-white flex-center">
							<i className="bi bi-lock text-xl"></i>
						</span>
					</div>
					<p className="text-sm montserrat text-left font-semibold  text-quinary leading-snug md:flex-grow">
						{props.item.caption}
					</p>
				</div>
				<div className="flex flex-col self-stretch w-full gap-y-2 text-base text-quinary">
					<p className="montserrat font-medium">
						Progress
					</p>
					<div className="flex flex-row flex-start bg-octonary w-full h-5 rounded-lg">
						<div className="bg-tertiary self-start w-1/2 h-5 rounded-lg"></div>
					</div>
					<p className="self-end">50%</p>
				</div>
			</button>
		</Link>
	);
}
