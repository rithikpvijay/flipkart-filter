import { Link } from "react-router-dom";
import MainNav from "./MainNav";

function MainDisplay({ filterValue, handleClick, filteredData }) {
  return (
    <>
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
      {filteredData.map((item) => (
        <div
          className="pt-[24px] pb-[30px] pl-[30px] border-b border-border-grey"
          key={item.id}
        >
          <Link className="flex items-start">
            <div>
              <div className="h-[200px] w-[200px] relative">
                <img
                  src={item.image}
                  className="max-h-full max-w-full  mx-auto "
                />
                <div className="absolute top-0 right-0">
                  <img
                    src="src/assets/icons/wishlist-white.svg"
                    className="w-4 h-4"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2.5 py-1.5 mt-[16px]">
                <input
                  id={item.id}
                  type="checkbox"
                  className="h-4 w-3.5 cursor-pointer"
                />
                <label
                  htmlFor={item.id}
                  className="text-[13px] cursor-pointer hover:font-semibold"
                >
                  <span className="text-[14px]">Add to Compare</span>
                </label>
              </div>
            </div>
            <div className="pl-[25px] w-[51%]">
              <div className="text-[18px] font-semibold">{item.title}</div>
              <div className="flex items-center mt-1.5">
                <span className="bg-green-rating text-white py-[2px] pl-2 pr-[18px] text-[11px] inline-block rounded-[4px] relative font-semibold">
                  {item.rating.average.toFixed(1)}
                  <img
                    src="src/assets/icons/rating-star.svg"
                    className="absolute top-[3.75px] left-[27.5px] h-2.5"
                  />
                </span>
                <span className="text-[13.5px] text-textbox-content font-semibold pl-2">
                  <span>{item.rating.count.toLocaleString()} Ratings </span>
                  <span> & </span>

                  <span>
                    {item.rating.reviewCount.toLocaleString()} Reviews
                  </span>
                </span>
              </div>
              <ul className="text-[13.5px] leading-[22px] mt-[13px]">
                {item.highlights.map((text, i) => (
                  <li
                    className="relative pl-4 before:content-[''] before:absolute before:left-1 before:top-2 before:w-[3.4px] before:h-[3.4px] before:rounded-full before:bg-checkbox-grey "
                    key={i}
                  >
                    {text}
                  </li>
                ))}
                <li className="relative pl-4 before:content-[''] before:absolute before:left-1 before:top-2 before:w-[3.4px] before:h-[3.4px] before:rounded-full before:bg-checkbox-grey ">
                  1 Year Warranty on Handset and 6 Months Warranty on
                  Accessories
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-[auto_auto] ">
              <div className="inline-block">
                <div className="text-[23px] font-semibold">
                  ₹{item.price.toLocaleString()}
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[13px] text-textbox-content line-through">
                    ₹{item.mrp.toLocaleString()}
                  </div>
                  <div className="text-[12px] font-semibold text-green-rating">
                    {Math.round(((item.mrp - item.price) / item.mrp) * 100)}%
                    off
                  </div>
                </div>
              </div>
              <div className="mt-1.5">
                <img src="src/assets/icons/assured1.png" className="h-[21px]" />
              </div>
              <div className="col-span-full">
                <div className="text-[13px]">
                  Upto{" "}
                  <span className="font-bold">
                    ₹
                    {(
                      Math.round((item.price * 0.75) / 10) * 10
                    ).toLocaleString()}
                  </span>{" "}
                  Off on Exchange
                </div>
                <div className="text-[13px] text-green-rating font-bold">
                  Bank Offer
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default MainDisplay;
