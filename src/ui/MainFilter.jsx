import MainNav from "./MainNav";

function MainFilter({ filterValue, handleClick }) {
  return (
    <div className="px-4 py-3 pb-0 border-b border-border-grey">
      <div className="text-[11px] text-textbox-content flex items-center">
        <MainNav text="Home" />
        <MainNav text="Mobiles & A..." />
        <MainNav text="Mobiles" />
      </div>
      <div className="mt-2">
        <span className="font-semibold text-[16px]">
          Showing 1 – 24 of 7,762 results for "smartphone"
        </span>
      </div>
      <div className="flex  text-[13px] ">
        <div className="pt-2 pr-2.5 pb-1 font-semibold ">Sort By</div>
        <div
          className={`main-sort ${
            filterValue === "relevance" ? "main-sort-highlight" : ""
          }`}
          onClick={() => handleClick("relevance")}
        >
          Relevance
        </div>
        <div
          className={`main-sort ${
            filterValue === "popularity" ? "main-sort-highlight" : ""
          }`}
          onClick={() => handleClick("popularity")}
        >
          Popularity
        </div>
        <div
          className={`main-sort ${
            filterValue === "price-asc" ? "main-sort-highlight" : ""
          }`}
          onClick={() => handleClick("price-asc")}
        >
          Price -- Low to High
        </div>
        <div
          className={`main-sort ${
            filterValue === "price-desc" ? "main-sort-highlight" : ""
          }`}
          onClick={() => handleClick("price-desc")}
        >
          Price -- High to Low
        </div>
      </div>
    </div>
  );
}

export default MainFilter;
