import { useSearchParams } from "react-router-dom";

function FilterClearAll() {
  const [searchParam, setSearchParam] = useSearchParams();
  const isSearchParam = [...searchParam.entries()].filter(
    ([key]) => key !== "sort"
  ).length;

  if (!isSearchParam) return null;

  function handleClick() {
    const updateParam = [...searchParam.entries()].filter(
      ([key]) => key === "sort"
    );
    setSearchParam(new URLSearchParams(updateParam));
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer text-brand-blue text-[11px] uppercase font-semibold"
    >
      <span>Clear all</span>
    </div>
  );
}

export default FilterClearAll;
