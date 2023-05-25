import styled from "styled-components";
import { TextField, Button } from "@mui/material";
export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-content: stretch;
	align-items: center;
	justify-content: space-around;
`;
export const SearchGroupContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: stretch;
	justify-content: space-evenly;
	align-items: center;
`;

export const SearchField = styled(TextField)`
	margin: 1% !important;
`;
