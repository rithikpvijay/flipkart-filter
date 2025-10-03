import { useSearchParams } from "react-router-dom";

function ClearSingleFilter({ title }) {
  const [searchParam, setSearchParam] = useSearchParams();

  const isSearchParam = searchParam.get(title)?.length;

  if (!isSearchParam) return null;

  function handleClick() {
    const updated = [...searchParam.entries()].filter(([key]) => key !== title);

    setSearchParam(new URLSearchParams(updated));
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer text-[13px] py-[7px] flex items-center gap-2.5"
    >
      <div className="h-3.5 w-3.5 bg-border-grey text-grey-strike py-[1px] flex items-center justify-center">
        &times;
      </div>
      <div className="text-grey-strike">
        <span>Clear all</span>
      </div>
    </div>
  );
}

export default ClearSingleFilter;
