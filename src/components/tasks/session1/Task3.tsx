import S1F8 from "@/assets/S1/S1F8.png";
export default function Task6() {
	let value =
		"Bitten schreiben Sie, Ihre Meinung";
	const handleChange = (bro: string) => {
		value = bro;
	};

	return (
		<>
			<p className="poppins md:text-xl">
				<strong>Task 3: Analyse</strong> the
				diagram on this page with a focus on oil
				palm plantations.
				<span className="block">
					<strong> Outline</strong> 1-2 possible
					key message(s) each from your point of
					view.
				</span>
			</p>
			<figure className="flex flex-col md:flex-row md:gap-4 text-center md:mb-4 ">
				<img
					src={S1F8}
					alt=""
					className="mx-auto"
				/>
				<figcaption className="poppins text-center px-4 md:px-16 mt-4 text-xs md:text-sm">
					<strong>Figure 8</strong>: Changes in
					land-scapes in Jambi Province,
					Indonesia, from 1990 to 2011. Rainforest
					(dark green diamonds), rubber (light
					green circles), oil palm (red squares),
					shrub/bushland (grey up-pointing
					triangles), and ‘other’ (blue
					down-pointing triangles). ‘Other’
					includes food crops, timber and fruit
					tree plantations. Adapted from Clough et
					al. (2016, p. 2).
				</figcaption>
			</figure>
			<div className="w-full border border-primary rounded-md px-2 focus-within:ring-primary-100 focus-within:ring-2">
				{/* input label */}
				<span className="text-xs">
					Key message(s):
				</span>

				{/* the input */}
				<textarea
					value={value}
					onChange={(e) =>
						handleChange(e.target.value)
					}
					className="w-full relative text-sm min-h-24 py-2 focus:outline-none"
				/>
			</div>
		</>
	);
}
