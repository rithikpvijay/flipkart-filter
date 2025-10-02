import { useState } from "react";
import arrowIcon from "../assets/icons/arrow-gray.svg";
import searchGray from "../assets/icons/search-gray.svg";
import DisplayItem from "./DisplayItem";

function Displayfeature({ title, items, searchBar }) {
  const [isExpand, setIsExpand] = useState(false);
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
          {searchBar && (
            <div className="relative">
              <img
                src={searchGray}
                alt="search icon"
                className="w-[12px] h-[20px] absolute top-1"
              />
              <input
                placeholder="Search Brand"
                type="text"
                className="outline-0 border-b-2 border-b-textbox-gray h-[20px] text-[13px] text-textbox-content w-full focus:border-brand-blue pl-[21px] placeholder:text-textbox-content "
              />
            </div>
          )}
          <div className="mt-1">
            {items.map((item) => (
              <DisplayItem item={item} key={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Displayfeature;
