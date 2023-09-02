export default function Task1() {
	let value =
		"Bitten schreiben Sie, Ihre Meinung";
	const handleChange = (bro: string) => {
		value = bro;
	};
	return (
		<>
			<p className="poppins md:text-xl">
				<strong>Task 1:</strong> Based on your
				pre-knowledge, briefly explain what makes
				South-East Asia and especially Indonesia
				so suitable for oil palm cultivation.
			</p>
			<textarea
				placeholder={value}
				onChange={(e) =>
					handleChange(e.target.value)
				}
				className="w-full relative border border-primary focus:outline-primary focus:scale-[1.0420] focus:shadow-xl focus: ease-in-out duration-[690ms]  rounded-md bg-senary text-sm min-h-24 py-4 px-4"
			/>
		</>
	);
}
