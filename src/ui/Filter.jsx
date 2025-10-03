import FilterItem from "../features/FilterItem";
import Storage from "../features/Storage";
import FilterClear from "./FilterTag";
import FilterClearAll from "./ClearAllFilters";

function Filter() {
  return (
    <div>
      <div className="border-b-1 border-border-grey px-4 py-4 pb-1.5">
        <div className="flex items-center justify-between">
          <div className="text-[17px] font-semibold ">Filters</div>
          <FilterClearAll />
        </div>
        <FilterClear />
      </div>
      <div>
        <FilterItem specification="brand" isSearchBar={true} />
        <FilterItem specification="ram" />
        <Storage />
      </div>
    </div>
  );
}

export default Filter;
