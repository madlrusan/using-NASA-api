import { ListItemButton } from "@mui/material";
import styled from "styled-components";

export const MyListItem = styled(ListItemButton)`
	display: flex !important;
	flex-direction: row !important;
	justify-content: space-between !important;
	align-items: center !important;
`;
export const MyLabel = styled.span`
	font-size: 2vh;
	font-weight: 400;
`;
export const InfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	align-content: stretch;
	flex-wrap: wrap;
	margin-left: 10%;
`;
export const ImageTitle = styled.span`
	font-weight: 700;
	width: 50%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
export const InfoDetails = styled.span`
	text-align: left;
	font-weight: 600;
	margin-left: 2%;
	width: 50%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
export const NoData = styled.div`
	font-size: 10vh;
	font-weight: 900;
	font-style: italic;
	color: lightgray;
`;