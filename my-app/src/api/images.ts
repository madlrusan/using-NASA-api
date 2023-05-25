import React, { useState, useCallback } from "react";
import { ROOT_URL } from "../dto/constants";

export async function fetchImagesUrl(nasa_id: string) {
  if (nasa_id !== "") {
    const url =`${ROOT_URL}/asset/${nasa_id}`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}


export function useImages(nasa_id: string) {
  const [imgUrls, setImgUrls] = useState<any[]>([]);

  const handleGet = useCallback(async () => {
    const data = await fetchImagesUrl(nasa_id);
    if(data) setImgUrls(data.collection.items);
  }, [nasa_id]);

  return {
    handleGet,
    imgUrls,
  };
}
