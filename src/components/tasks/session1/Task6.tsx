import S1F19 from "@/assets/S1/S1F19.png";

export default function Task6() {
	return (
		<>
			<p className="poppins text-md md:text-lg ">
				<strong>Task 6</strong>: Look at the
				effect of oil palm plantations on each
				ecosystem function. <br /> If you think
				oil palm plantations have a positive
				effect, give a “+” sign <br /> If you
				think they have a negative effect, give a
				“-” sign <br />
				<strong>Click on</strong> the box to
				switch between “+” and “-” sign
			</p>
			<figure className="text-center mb-4">
				<img
					src={S1F19}
					alt=""
					className="mx-auto"
				/>
				<figcaption className="poppins text-center text-xs md:text-xl py-4">
					<strong>Figure 19</strong>: Net effects
					on ecosystem functions of oil palm
					plantations. Net effects do not imply
					that all effects on a given ecosystem
					function are positive or negative, but
					that the majority or most-dominant
					effects are in the given direction.
					Estimates of net effect direction and
					correlation are qualitative and are
					based on the synthesis of literature
					presented in Dislich et al. (2017).
					Adapted from Meijaard et al. (2021, p.
					30).
				</figcaption>
			</figure>
		</>
	);
}
