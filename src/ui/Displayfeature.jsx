import { useState } from "react";
import arrowIcon from "../assets/icons/arrow-gray.svg";

import DisplayItem from "./DisplayItem";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";

import ClearSingleFilter from "./ClearSingleFilter";

function Displayfeature({ title, items, isSearchBar }) {
  const [searchParam] = useSearchParams();
  const [isExpand, setIsExpand] = useState(!!searchParam.getAll(title).length);
  const [query, setQuery] = useState("");

  let selected = searchParam.getAll(title);

  selected = selected.map((value) =>
    !isNaN(Number(value)) ? Number(value) : value
  );

  let queryItems = [
    ...items.filter((item) => selected.includes(item)),
    ...items.filter((item) => !selected.includes(item)),
  ];

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  if (query) {
    queryItems = items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <div className="border-b-1 border-border-grey cursor-pointer">
      <div
        className={`px-4  flex items-center justify-between ${
          !isExpand ? "py-4" : "pt-4 pb-1"
        }`}
        onClick={() => setIsExpand((exp) => !exp)}
      >
        <div className=" text-[12px] uppercase font-semibold ">{title}</div>
        <img
          src={arrowIcon}
          alt="icon"
          className={`w-[6px] h-[11px]  ${
            isExpand ? "rotate-90" : "rotate-270"
          }`}
        />
      </div>
      {isExpand && (
        <div className="px-4">
          <ClearSingleFilter title={title} />
          {isSearchBar && <SearchBar query={query} onSearch={handleSearch} />}
          <div className="mt-1">
            {queryItems.map((item) => (
              <DisplayItem item={item} key={item} title={title} query={query} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Displayfeature;
