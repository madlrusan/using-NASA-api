import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Collapse,
	Dialog,
	Fab,
	Fade,
	List,
	Toolbar,
	useScrollTrigger,
} from "@mui/material";
import { filterUniqueImages, getName } from "../../utils/helperFunctions";
import {
	ImageTitle,
	InfoContainer,
	InfoDetails,
	MyLabel,
	MyListItem,
} from "./SearchResults.components";
import { ShowComponent } from "../Show/ShowPage";

export const SearchResults = (collection: any) => {
	const items = filterUniqueImages(collection.collection.collection.items);
	const [openItems, setOpenItems] = useState<boolean[]>(
		Array(items.length).fill(false)
	);
	const [dialogData, setDialogData] = useState({});
	const [dialogLinks, setDialogLinks] = useState({});

	const handleClick = (index: number) => {
		const newOpenItems = [...openItems];
		newOpenItems[index] = !newOpenItems[index];
		setOpenItems(newOpenItems);
	};
	// console.log(items);
	const [openDialog, setOpenDialog] = useState(false);
	const handleClose = () => {
		setOpenDialog(false);
	};
	return (
		<>
			{/* <AppBar /> */}

			<List>
				{items.map((item: any, index: number) => {
					const isOpen = openItems[index];
					return (
						<div key={index}>
							<MyListItem onClick={() => handleClick(index)}>
								<Avatar
									variant="square"
									src={item.links[0].href}
								></Avatar>
								<ImageTitle>{item.data[0].title}</ImageTitle>
								{isOpen ? <ExpandLess /> : <ExpandMore />}
							</MyListItem>
							<Collapse
								in={isOpen}
								timeout="auto"
								unmountOnExit
							>
								{/* <List
									component="div"
									disablePadding
								>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemText primary="Starred" />
									</ListItemButton>
								</List> */}
								<div>
									{/* <ListItemText>title: {item.data[0].title}</ListItemText> */}
									<InfoContainer>
										<MyLabel>Image Title:</MyLabel>
										<InfoDetails>
											{item.data[0].title}
										</InfoDetails>
									</InfoContainer>

									<InfoContainer>
										<MyLabel>Photographer:</MyLabel>
										<InfoDetails>
											{/* {item.data[0].photographer} */}
											{item.data[0].photographer
												? getName(
														item.data[0]
															.photographer
												  )
												: "Unknown"}
										</InfoDetails>
									</InfoContainer>
									<InfoContainer>
										<MyLabel>Image Location:</MyLabel>
										<InfoDetails>
											{item.data[0].location}
										</InfoDetails>
									</InfoContainer>
									<InfoContainer>
										{" "}
										See more details{" "}
										<Button
											onClick={() => {
												setDialogData(item.data[0]);
												// setDialogLinks(item.href);
												setOpenDialog(true);
											}}
										>
											here
										</Button>
									</InfoContainer>
								</div>
							</Collapse>
						</div>
					);
				})}
			</List>
			<ScrollTop>
				<Fab
					size="small"
					aria-label="scroll back to top"
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
			<ShowComponent
				open={openDialog}
				data={dialogData}
				handleClose={handleClose}
				// links={dialogLinks}
			/>
		</>
	);
};
interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	children: React.ReactElement;
}
function ScrollTop(props: Props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = (
			(event.target as HTMLDivElement).ownerDocument || document
		).querySelector("#back-to-top-anchor");

		if (anchor) {
			anchor.scrollIntoView({
				block: "center",
			});
		}
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: "fixed", bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	);
}
