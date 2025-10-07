import { Link, useSearchParams } from "react-router-dom";
import MainNav from "./MainNav";
import MainFilter from "./MainFilter";
import MainData from "./MainData";
import Pagination from "./Pagination";
import ErrorPage from "./ErrorPage";

function MainDisplay({ filterValue, handleClick, filteredData }) {
  const count = filteredData.length;
  const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;
  const [searchParams] = useSearchParams();

  if (!count) return <ErrorPage />;

  let pageNum = Number(searchParams.get("page")) || 1;

  const displayData = filteredData.slice(
    (pageNum - 1) * PAGE_SIZE,
    pageNum * PAGE_SIZE
  );

  return (
    <>
      <MainFilter
        handleClick={handleClick}
        filterValue={filterValue}
        count={count}
      />
      {displayData.map((item) => (
        <MainData item={item} key={item.id} />
      ))}
      <Pagination count={count} />
    </>
  );
}

export default MainDisplay;
