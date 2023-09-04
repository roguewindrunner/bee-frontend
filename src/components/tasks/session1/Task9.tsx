export default function Task9() {
	let value = "";
	const handleChange = (bro: string) => {
		value = bro;
	};
	return (
		<>
			<p className="poppins text-md md:text-xl">
				<strong>Task 9</strong>: With respect to
				the previous slides and task 7, develop a
				problem statement regarding the impacts of
				oil palm cultivation. Write not more than
				2-3 sentences.
			</p>
			<textarea
				placeholder={value}
				onChange={(e) =>
					handleChange(e.target.value)
				}
				rows={10}
				className="w-full relative border border-primary focus:outline-primary focus:scale-[1.0420] focus:shadow-xl focus: ease-in-out duration-[690ms]  rounded-md bg-senary text-sm min-h-24 py-4 px-4"
			/>
		</>
	);
}
