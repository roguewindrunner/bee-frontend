import leafletPNG from "@/assets/leaflet.png";

export default function Task2() {
	return (
		<>
			<p className="poppins md:text-xl">
				<strong>Task 2: </strong>Based on your
				pre-knowledge, mark where in Indonesia
				(Southeast Asia) large areas of oil palm
				plantations are located on the map. For
				the marking, you can click on the map to
				mark the area. Marker for areas with a
				high density of oil palm cultivation.
			</p>
			{/* TODO: Leaflet */}
			<figure className="text-center mb-4">
				<img
					src={leafletPNG}
					alt=""
					className="mx-auto"
				/>
				<figcaption className="poppins md:text-xl py-4">
					<strong>Figure 2:</strong> Map of
					Southeast Asia. (ASEAN UP, 2018).
				</figcaption>
			</figure>
		</>
	);
}
