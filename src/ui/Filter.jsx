import FilterItem from "../features/FilterItem";
import Storage from "../features/Storage";

function Filter() {
  return (
    <div>
      <div className="border-b-1 border-border-grey px-4 py-4 ">
        <p className="text-[17px] font-semibold ">Filters</p>
      </div>
      <div>
        <FilterItem specification="brand" searchBar={true} />
        <FilterItem specification="ram" />
        <Storage />
      </div>
    </div>
  );
}

export default Filter;
