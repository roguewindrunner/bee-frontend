import {PropsWithChildren, useState} from "react";

type Props = {
	checked?: boolean;
	onChange?: (event: {checked: boolean}) => void;
};

export default function ObjectiveCheckbox({
	children,
	onChange,
	checked = false,
}: PropsWithChildren<Props>) {
	const [isChecked, setChecked] =
		useState(checked);

	const handleClick = () => {
		onChange?.({checked: !isChecked});
		setChecked(!isChecked);
	};

	return (
		<button
			onClick={handleClick}
			className="bg-primary border w-full border-slate-600 rounded-lg flex justify-between p-4 items-center text-left gap-2 md:gap-4 text-sm">
			<div className="text-neutral-800">
				{children}
			</div>
			<div
				className={`w-4 h-4 bg-secondary border border-blue-900 rounded-sm flex-center flex-none text-base ${
					isChecked
						? "bg-tertiary"
						: "bg-transparent"
				}`}>
				{isChecked && (
					<i className="bi bi-check-lg relative text-white" />
				)}
			</div>
		</button>
	);
}
