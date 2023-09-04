import {Textarea} from "@mantine/core";
import {Fragment} from "react";
import {render} from "react-dom";

export default function Task7() {
	const data = {
		rows: 2,
		impact: ["Negative", "Positive"],
		SDGs: ["", ""],
		exp: ["", ""],
	};

	return (
		<>
			<p className="poppins text-md md:text-xl">
				<strong>Task 8</strong>: Select and
				allocate icons of the SDGs which could be
				(a) negatively and (b) positively impacted
				by oil palm cultivation. Explain your
				allocations in note form. For more
				information on the SDGs, look on the next
				slide.
			</p>
			<div className="text-xs text-center">
				<div className="grid grid-cols-3 rounded-md border-2 border-primary">
					<div className="border border-primary py-1 bg-primary rounded-tl-md text-white">
						Impact
					</div>
					<div className="border border-primary py-1 bg-primary text-white">
						SDGs
					</div>
					<div className="border border-primary py-1 bg-primary rounded-tr-md text-white">
						Explanation
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
										value={data.impact[x] ?? ""}
										variant="unstyled"
										className="p-1 text-primary text-center border-none focus:outline-none"
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
										value={data.SDGs[x] ?? ""}
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
										value={data.exp[x] ?? ""}
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
			</div>
		</>
	);
}
