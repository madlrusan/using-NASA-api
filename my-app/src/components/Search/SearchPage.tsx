import React, { useState } from "react";
import {
	Container,
	SearchGroupContainer,
	SearchField,
} from "./SearchPage.components";
import { TextField, Button, Toolbar } from "@mui/material";
import { useSearch } from "../../api/search";
import { SearchResults } from "../SearchResults/SearchResults";
import { NoData } from "../SearchResults/SearchResults.components";
export const SearchComponent = () => {
	const {
		query,
		setQuery,
		startYear,
		setStartYear,
		endYear,
		setEndYear,
		handleSearch,
		collection,
	} = useSearch();

	return (
		<>
			<Toolbar id="back-to-top-anchor" />
			<Container>
				<SearchGroupContainer>
					<SearchField
						label="Search query"
						value={query}
						onChange={(e: any) => {
							setQuery(e.target.value);
						}}
					/>
					<SearchField
						label="Start year"
						type="number"
						value={startYear}
						onChange={(e: any) => {
							setStartYear(e.target.value);
						}}
					/>
					<SearchField
						label="End year"
						type="number"
						value={endYear}
						onChange={(e: any) => {
							setEndYear(e.target.value);
						}}
					/>
				</SearchGroupContainer>
				<Button
					variant="contained"
					onClick={handleSearch}
				>
					Search
				</Button>
			</Container>
			{collection !== null ? (
				<SearchResults collection={collection} />
			) : (
				<NoData> here is no data</NoData>
			)}
		</>
	);
};
