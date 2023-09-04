export default function Task11() {
	let value = "";
	const handleChange = (bro: string) => {
		value = bro;
	};
	return (
		<>
			<p className="poppins text-md md:text-xl">
				<strong>Task 11</strong>: Based on what
				you have learned in Session I, explain
				briefly: In which way do you see needs and
				potentials for Sustainable Oil Palm
				Cultivation with respect to your problem
				statement (task 9)?
			</p>
			<textarea
				placeholder={value}
				onChange={(e) =>
					handleChange(e.target.value)
				}
				rows={20}
				className="w-full relative border border-primary focus:outline-primary focus:scale-[1.0420] focus:shadow-xl focus: ease-in-out duration-[690ms]  rounded-md bg-senary text-sm min-h-24 py-4 px-4"
			/>
		</>
	);
}
