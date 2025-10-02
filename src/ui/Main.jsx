import { Link, useSearchParams } from "react-router-dom";
import useSmartPhone from "../hooks/useSmartPhone";
import MainNav from "./MainNav";
import MainDisplay from "./MainDisplay";

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useSmartPhone();
  if (!data) return null;
  console.log(data);

  function handleClick(value) {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  }

  let filteredData;

  const filterValue = searchParams.get("sort");
  if (!filterValue) filteredData = data;
  if (filterValue === "relevance")
    filteredData = data.toSorted((a, b) => b.rating.average - a.rating.average);
  if (filterValue === "popularity")
    filteredData = data.toSorted((a, b) => b.rating.count - a.rating.count);

  if (filterValue === "price-asc")
    filteredData = data.toSorted((a, b) => a.price - b.price);

  if (filterValue === "price-desc")
    filteredData = data.toSorted((a, b) => b.price - a.price);

  return (
    <main className="bg-white shadow-box ">
      <MainDisplay
        filterValue={filterValue}
        filteredData={filteredData}
        handleClick={handleClick}
      />
    </main>
  );
}

export default Main;
