import arrowIcon from "../assets/icons/arrow-gray.svg";
import searchGray from "../assets/icons/search-gray.svg";
import DisplayItem from "./DisplayItem";

function Displayfeature({ items, isExpand, handleClick, searchBar = false }) {
  console.log(isExpand);
  return (
    <div
      className="px-4 py-4  border-b-1 border-border-grey cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between ">
        <div className=" text-[12px] uppercase font-semibold ">Brand</div>
        <img
          src={arrowIcon}
          alt="icon"
          className={`w-[6px] h-[11px]  ${
            isExpand ? "rotate-90" : "rotate-270"
          }`}
        />
      </div>
      {isExpand && (
        <>
          {searchBar && (
            <div className="relative mt-1">
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
          <div className="mt-2">
            {items.map((item) => (
              <DisplayItem item={item} key={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Displayfeature;
