import FilterClearAll from "./ClearAllFilters";
import Rating from "../features/Rating";
import Brand from "../features/Brand";
import Ram from "../features/Ram";
import FilterTag from "./FilterTag";
import Discount from "../features/Discount";
import FilterCategory from "../features/FilterCategory";
import Price from "../features/Price";
function Filter() {
  return (
    <div>
      <div className="border-b-1 border-border-grey px-4 py-4 pb-1.5">
        <div className="flex items-center justify-between">
          <div className="text-[17px] font-semibold ">Filters</div>
          <FilterClearAll />
        </div>
        <FilterTag />
      </div>
      <div>
        <FilterCategory />
        <Brand />
        <Ram />
        <Price />
        <Rating />
        <Discount />
      </div>
    </div>
  );
}

export default Filter;
