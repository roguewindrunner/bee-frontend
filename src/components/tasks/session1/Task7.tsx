import {Textarea} from "@mantine/core";
import {Fragment} from "react";
import {render} from "react-dom";

export default function Task7() {
	const data = {
		rows: 3,
		sei: ["", "", ""],
		ei: ["", "", ""],
		oi: ["", "", ""],
	};

	return (
		<>
			<p className="poppins text-md md:text-xl">
				<strong>Task 7</strong>: Based on your
				pre-knowledge, your notes from the info
				slides, and your exploration of oil palm
				plantations and their ecosystem functions,
				<strong>fill in</strong> the table on
				impacts of oil palm cultivation.
			</p>
			<div className="text-xs text-center">
				<div className="grid grid-cols-3 rounded-md border-2 border-primary">
					<div className="border border-primary py-1 bg-primary rounded-tl-md text-white">
						Socioeconomic impacts
					</div>
					<div className="border border-primary py-1 bg-primary text-white">
						Environmental impacts
					</div>
					<div className="border border-primary py-1 bg-primary rounded-tr-md text-white">
						Other impacts
					</div>
					{[...new Array(data.rows).keys()].map(
						(x) => (
							<Fragment key={x}>
								<div
									className={`${
										x === data.rows - 1
											? "rounded-bl-md"
											: "border-b-2"
									} border-r-2 border-primary`}>
									<Textarea
										autosize
										value={data.sei[x] ?? ""}
										variant="unstyled"
										className="p-1 text-primary border-none focus:outline-none"
									/>
								</div>
								<div
									className={`${
										x === data.rows - 1
											? "rounded-bl-md"
											: "border-b-2"
									} border-r-2 border-primary`}>
									<Textarea
										autosize
										value={data.ei[x] ?? ""}
										variant="unstyled"
										className="p-1 text-primary border-none focus:outline-none"
									/>
								</div>
								<div
									className={`${
										x === data.rows - 1
											? "rounded-br-md"
											: "border-b-2"
									} border-primary relative`}>
									<Textarea
										autosize
										value={data.oi[x] ?? ""}
										variant="unstyled"
										className="p-1 text-primary border-none focus:outline-none"
									/>
									{data.rows > 3 && (
										<button className="rounded-full w-5 h-5 flex-center text-gray-600 absolute z-[1] top-1.5 right-2">
											<i className="bi bi-x-circle-fill"></i>
										</button>
									)}
								</div>
							</Fragment>
						)
					)}
				</div>
				<div className="flex-center mt-2">
					<button className="btn text-xs py-1 px-2 shadow-md">
						<i className="bi bi-plus text-lg"></i>
						Add row
					</button>
				</div>
			</div>
		</>
	);
}
