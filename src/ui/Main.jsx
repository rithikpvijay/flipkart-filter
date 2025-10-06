import { Link, useSearchParams } from "react-router-dom";
import useSmartPhone from "../hooks/useSmartPhone";
import MainNav from "./MainNav";
import MainDisplay from "./MainDisplay";

import getFilteredSort from "../helper/getFilteredSort";
import getFilteredBrand from "../helper/getFilteredBrand";
import getFilteredRam from "../helper/getFilteredRam";
import getFilteredRating from "../helper/getFilteredRating";
import getFilteredDiscount from "../helper/getFilteredDiscount";

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useSmartPhone();
  if (!data) return null;

  function handleClick(value) {
    searchParams.set("sort", value);
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
  let filteredPrice = filteredDiscount;
  if (selectedPriceRange?.length) {
    let [min, max] = selectedPriceRange.split(",");
    if (max === "30000") max = 10000000;
    max = filteredPrice = filteredPrice.filter(
      (data) => min <= data.price && max >= data.price
    );
  }

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
