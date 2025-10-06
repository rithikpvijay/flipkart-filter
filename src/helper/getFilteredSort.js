import { useSearchParams } from "react-router-dom";

function getFilteredSort(data, filterValue) {
  if (!filterValue) return data;
  if (filterValue === "relevance")
    return data.toSorted((a, b) => b.rating.average - a.rating.average);
  if (filterValue === "popularity")
    return data.toSorted((a, b) => b.rating.count - a.rating.count);
  if (filterValue === "price-asc")
    return data.toSorted((a, b) => a.price - b.price);
  if (filterValue === "price-desc")
    return data.toSorted((a, b) => b.price - a.price);
}

export default getFilteredSort;
