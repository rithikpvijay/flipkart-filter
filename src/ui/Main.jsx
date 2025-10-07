import { Link, useSearchParams } from "react-router-dom";
import useSmartPhone from "../hooks/useSmartPhone";
import MainNav from "./MainNav";
import MainDisplay from "./MainDisplay";

import getFilteredSort from "../helper/getFilteredSort";
import getFilteredBrand from "../helper/getFilteredBrand";
import getFilteredRam from "../helper/getFilteredRam";
import getFilteredRating from "../helper/getFilteredRating";
import getFilteredDiscount from "../helper/getFilteredDiscount";
import getPriceRange from "../helper/getPriceRange";
import Pagination from "./Pagination";

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useSmartPhone();
  if (!data) return null;
  const count = data.length;

  function handleClick(value) {
    searchParams.set("sort", value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  const filterValue = searchParams.get("sort");
  const filteredData = getFilteredSort(data, filterValue);

  const selectedBrands = searchParams.getAll("brand");
  const filteredBrand = getFilteredBrand(selectedBrands, filteredData);

  const selectedRams = searchParams.getAll("ram");
  const filteredRam = getFilteredRam(selectedRams, filteredBrand);

  const selectedRatings = searchParams.getAll("customer ratings");
  const filteredRating = getFilteredRating(selectedRatings, filteredRam);

  const selectedDiscounts = searchParams.getAll("discount");
  const filteredDiscount = getFilteredDiscount(
    selectedDiscounts,
    filteredRating
  );

  const selectedPriceRange = searchParams.get("price");
  const filteredPrice = getPriceRange(selectedPriceRange, filteredDiscount);

  return (
    <main className="bg-white shadow-box ">
      <MainDisplay
        filterValue={filterValue}
        filteredData={filteredPrice}
        handleClick={handleClick}
      />
    </main>
  );
}

export default Main;
