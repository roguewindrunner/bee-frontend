export default function Task10() {
	let value = "";
	const handleChange = (bro: string) => {
		value = bro;
	};
	return (
		<>
			<p className="poppins text-md md:text-xl">
				<strong>Task 10</strong>: With regard to
				the definition on Sustainable Development
				and your pre-knowledge, define Sustainable
				Oil Palm Cultivation in your own words.
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
