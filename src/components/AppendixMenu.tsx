import bookIcon from "@/assets/book-letter-a.svg"; /* 
import GlossaryModal from "@/components/GlossaryModal";/*  */
import {Menu, createStyles} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import colors from "tailwindcss/colors";

const useDropdownStyles = createStyles(() => ({
	item: {
		fontFamily: "montserrat",
		fontSize: "0.8rem",
		fontWeight: "bold",
		color: colors.emerald[800],
	},
	itemIcon: {
		fontSize: "1.25rem",
	},
}));

export default function AppendixMenu() {
	const {classes} = useDropdownStyles();
	const [
		isModalOpen,
		{open: openModal, close: closeModal},
	] = useDisclosure(false);

	return (
		<>
			<Menu
				shadow="md"
				classNames={{
					item: classes.item,
					itemIcon: classes.itemIcon,
				}}>
				<Menu.Target>
					<button className="absolute lg:static top-4 md:top-2 right-2 flex items-center rounded-md bg-[#D9D9D9]/50 text-white p-1 lg:px-2 text-[0.75rem] montserrat gap-1">
						<img
							src={bookIcon}
							alt="Book icon with letter 'A'"
						/>
						<span className="hidden lg:inline">
							Appendix
						</span>
					</button>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Item
						icon={
							<i className="bi bi-journal-text" />
						}
						onClick={openModal}>
						Glossary
					</Menu.Item>
					<Menu.Item
						icon={
							<i className="bi bi-mortarboard" />
						}>
						Curricular Links
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>

			{/* Glossary modal */}
			{/* 			<GlossaryModal
				opened={isModalOpen}
				onClose={closeModal}
			/> */}
		</>
	);
}
