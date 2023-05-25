import React, { useState, useRef } from "react";
import { ROOT_URL } from "../dto/constants";
import { useQuery } from "react-query";

export async function fetchSearchData(
  query: string,
  startYear?: number,
  endYear?: number
) { 
  let q;
  if(query === "") q =" ";
  else q = query;
  let url = `${ROOT_URL}/search?q=${q}&media_type=image`;
  let mql = "";
  if (startYear && !endYear) {
    mql = mql + `&year_start=${startYear}`;
  } else if (!startYear && endYear) {
    mql = mql + `&year_end=${endYear}`;
  } else if (startYear && endYear) {
    mql = mql + `&year_start=${startYear}&year_end=${endYear}`;
  }
  if (mql !== "") url = url + mql;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export function useSearch() {
  const [query, setQuery] = useState("");
  const [startYear, setStartYear] = useState<number | undefined>();
  const [endYear, setEndYear] = useState<number | undefined>();
  const [collection, setCollection] = useState<any>(null);

  const handleSearch = async () => {
    const data = await fetchSearchData(query, startYear, endYear);
    setQuery("");
    setStartYear(undefined);
    setEndYear(undefined);
    setCollection(data);
  };

  return {
    query,
    setQuery,
    startYear,
    setStartYear,
    endYear,
    setEndYear,
    handleSearch,
    collection,
  };
}
