export const filterUniqueImages = (items: any[]) => {
  const uniqueImages = items.reduce((uniqueItems: any[], currentItem: any) => {
    const title = currentItem.data[0].title;
    if (!uniqueItems.some((item: any) => item.data[0].title === title)) {
      uniqueItems.push(currentItem);
    }
    return uniqueItems;
  }, []);
  return uniqueImages;
}
export const getName = (name: string) => {
  const parts = name.split('/');
  return parts[parts.length - 1];
}
export const getImageLabel = (url: string) => {
  const parts = url.split("~");
  console.log(parts);
  return parts[parts.length - 1];
}