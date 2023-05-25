import {
	AppBar,
	Button,
	Dialog,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
	InfoContainer,
	InfoDetails,
	MyImage,
	MyLabel,
} from "./ShowPage.components";
import { getName } from "../../utils/helperFunctions";
import moment from "moment";
import { useImages } from "../../api/images";

type ShowComponentProps = {
	open: boolean;
	handleClose: () => void;
	data: any;
};

export const ShowComponent = (props: ShowComponentProps) => {
	const { open, data, handleClose } = props;
	const [nasaId, setNasaId] = useState<string>("");
	const { handleGet, imgUrls } = useImages(nasaId);

	useEffect(() => {
		if (open) {
			setNasaId(data.nasa_id);
			handleGet();
		} else {
			setNasaId("");
		}
	}, [data.nasa_id, handleGet, open]);

	return (
		<Dialog
			fullScreen
			open={open}
		>
			<AppBar sx={{ position: "relative" }}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleClose}
						aria-label="close"
					>
						<CloseIcon />
					</IconButton>
					<Typography
						sx={{ ml: 2, flex: 1 }}
						variant="h6"
						component="div"
					>
						{data.title}
					</Typography>
				</Toolbar>
			</AppBar>
			<div>
				<InfoContainer>
					<MyLabel>Image Title:</MyLabel>
					<InfoDetails>{data.title}</InfoDetails>
				</InfoContainer>

				<InfoContainer>
					<MyLabel>Photographer:</MyLabel>
					<InfoDetails>
						{data.photographer
							? getName(data.photographer)
							: "Unknown"}
					</InfoDetails>
				</InfoContainer>
				<InfoContainer>
					<MyLabel>Image Location:</MyLabel>
					<InfoDetails>{data.location}</InfoDetails>
				</InfoContainer>
				<InfoContainer>
					<MyLabel>Image Keywords:</MyLabel>
					<ul>
						{data.keywords && data.keywords.length > 0 ? (
							data.keywords.map((keyword: any, index: number) => (
								<li key={`keyword-${index}`}>
									<InfoDetails>{keyword}</InfoDetails>
								</li>
							))
						) : (
							<InfoDetails>no keywords</InfoDetails>
						)}
					</ul>
				</InfoContainer>
				<InfoContainer>
					<MyLabel>Image Description:</MyLabel>
					<InfoDetails>{data.description}</InfoDetails>
				</InfoContainer>
				<InfoContainer>
					<MyLabel>Image Date Creation:</MyLabel>
					<InfoDetails>
						{moment(data.date_created).format(
							"DD MMM YYYY, HH:mm:ss"
						)}
					</InfoDetails>
				</InfoContainer>

				<InfoContainer>
					<MyLabel>Images from collection:</MyLabel>
					{imgUrls && imgUrls.length > 0
						? imgUrls
								.filter((src) => src.href.includes("jpg"))
								.slice(0, 1)
								.map((src: any, index: number) => {
									return (
										<InfoContainer key={`image-${index}`}>
											<MyImage
												src={src.href}
												alt={`image-${index}`}
											/>
										</InfoContainer>
									);
								})
						: imgUrls !== undefined && (
								<InfoDetails>{""}</InfoDetails>
						  )}
				</InfoContainer>
			</div>
		</Dialog>
	);
};
