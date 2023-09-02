import literatures from "@/data/session1/page26/literatures";
import figures from "@/data/session1/page26/figures";

export default function S1P26() {
	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto with-custom-popover">
			<h1>Bibliography Session I</h1>
			<h2 className="text-lg font-semibold -mb-2">
				Literature:
			</h2>
			<div className="flex flex-col text-xs gap-2">
				{literatures.map((literature) => (
					<p key={literature.identifier}>
						{literature.reference}{" "}
						<a
							href={literature.identifier ?? ""}
							target="_blank"
							rel="noopener noreferrer"
							className="link break-words">
							{literature.identifier}
						</a>
					</p>
				))}
			</div>
			{/* TODO: #12 Add Figure bibliography */}

			<h2 className="text-lg font-semibold -mb-2">
				Figures:
			</h2>
			<div className="flex flex-col text-xs gap-2">
				{figures.map((figure) => (
					<p key={figure.identifier}>
						{figure.reference}{" "}
						<a
							href={figure.identifier ?? ""}
							target="_blank"
							rel="noopener noreferrer"
							className="link break-words">
							{figure.identifier}
						</a>
					</p>
				))}
			</div>
			<h2 className="text-lg font-semibold -mb-2">
				Layout:
			</h2>
			<div className="flex flex-col text-xs gap-2">
				<p>
					Dischereit, J. (2020). Green lines.
					[Clipart].
				</p>
				<p>
					Picard, C. (2019). Fruit bunches.
					[Photograph]. Retrieved Dec 23, 2020,
					from{" "}
					<a
						href="https://gd.eppo.int/taxon/EAIGU/photos"
						target="_blank"
						className="link">
						https://gd.eppo.int/taxon/EAIGU/photos
					</a>
				</p>
			</div>
		</main>
	);
}
