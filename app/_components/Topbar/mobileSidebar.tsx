import React from "react";
import {
	Typography,
	List,
	ListItem,
	ListItemPrefix,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import {
	ArrowSmallRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

//Navigation
import { NavigationEntry } from './navigationTypes';
import { NavigationList } from './navigationList';
import Link from "next/link";
import Image from "next/image";

type AccordionItemArgs = {
	id: Number,
	entry: NavigationEntry,
	open: Number,
	handleOpen: (value: any) => void
}

const AccordionItem = (args: AccordionItemArgs) => {
	return (
		<>
			<Accordion
				open={args.open === args.id}
				icon={
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`mx-auto h-4 w-4 transition-transform ${args.open === args.id ? "rotate-180" : ""}`}
					/>
				}
			>
				<ListItem className="p-0" selected={args.open === args.id}>
					<AccordionHeader onClick={() => args.handleOpen(args.id)} className="border-b-0 p-3">
						<Typography color="blue-gray" className="mr-auto font-normal">
							{args.entry.title}
						</Typography>
					</AccordionHeader>
				</ListItem>
				<AccordionBody className="py-1">
					<List className="p-0">
						{
							args.entry.subentries ?
								args.entry.subentries.map((subentry, id) => (
									<div key={id}>
										<Link href={subentry.href.toString()}>
											<ListItem>
												<ListItemPrefix>
													<ArrowSmallRightIcon strokeWidth={3} className="h-3 w-5" />
												</ListItemPrefix>
												<div className="flex">
													{
														subentry.svgUrl ?
															<div className="h-3 items-center">
																<Image
																	src={"/" + subentry.svgUrl}
																	alt="Silestone"
																	width="0"
																	height="0"
																	sizes="100vw"
																	style={{ width: 'auto', height: '100%' }}
																/>
															</div>
															:
															subentry.title
													}
												</div>
											</ListItem>
										</Link>
									</div>))
								:
								<></>
						}
					</List>
				</AccordionBody>
			</Accordion>
		</>
	);
}

type SideItemArgs = {
	id: Number,
	entry: NavigationEntry,
	open: Number,
	handleOpen: (value: any) => void
};

const SideItem = (args: SideItemArgs) => {
	return (
		<>
			{
				args.entry.subentries && args.entry.subentries?.length > 0 ?
					<AccordionItem id={args.id} entry={args.entry} open={args.open} handleOpen={args.handleOpen} />
					:
					<Link href={args.entry.href.toString()}>
						<ListItem>
							{args.entry.title}
						</ListItem>
					</Link>
			}
		</>
	);
}

type MobileSidebarArgs = {
	setOpen: (value: any) => void
}

const MobileSidebar = (args: MobileSidebarArgs) => {
	const [open, setOpen] = React.useState(0);

	const handleOpen = (value: any) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<>
			<div className="shadow-inner">
				<div className="p-5">
					<div className="grid grid-cols-6">
						<div className="flex">
							<button
								type="button"
								className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
								onClick={() => args.setOpen(false)}
							>
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Fechar</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>


						<div className="col-span-5">
							<Link href="/">
								<div className="float-right">
									<div className="flex space-x-2">
										<img className="h-6 m-auto w-auto" src="/logo.png" alt="" />
										<div className="m-auto">
											<Typography variant="h6" color="blue-gray">
												Giestas Granitos
											</Typography>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<List>
					{NavigationList.entries.map((entry, id) => (
						<div key={entry.title}>
							<SideItem id={id + 1} entry={entry} open={open} handleOpen={handleOpen} />
						</div>
					))}

					{/*
                    <a href="#" className="-m-2 flex items-center p-2">
                    <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="sr-only">, mudar língua</span>
                    </a>
                    */}

				</List>
			</div>
		</>
	);
}

export default MobileSidebar;