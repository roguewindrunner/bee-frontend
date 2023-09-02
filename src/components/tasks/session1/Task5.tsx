export default function Task1() {
	let value = "Potential ecosystem functions";
	const handleChange = (bro: string) => {
		value = bro;
	};
	return (
		<>
			<p className="poppins md:text-xl">
				<strong>Task 5:</strong> What are
				potential functions of oil palm
				plantations as an ecosystem?{" "}
				<strong className="italic">
					Take notes
				</strong>
				.
			</p>
			<textarea
				placeholder={value}
				onChange={(e) =>
					handleChange(e.target.value)
				}
				className="w-full relative border border-primary focus:outline-primary focus:scale-[1.0420] focus:shadow-xl focus: ease-in-out duration-[690ms] rounded-md bg-senary text-sm min-h-24 py-4 px-4"
			/>
		</>
	);
}
