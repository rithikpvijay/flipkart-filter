import { useSearchParams } from "react-router-dom";
import RamTag from "./RamTag";
import RatingTag from "./RatingTag";
import DiscountTag from "./DiscountTag";
import PriceTag from "./PriceTag";

function FilterTag() {
  const [searchParam, setSearchParam] = useSearchParams();

  const clearItems = [...searchParam.entries()].filter(
    ([key]) => key !== "sort" && key !== "page"
  );

  function handleClick(item) {
    console.log(item);
    const updatedItem = [...searchParam.entries()].filter(
      ([_, value]) => value !== item
    );
    setSearchParam(new URLSearchParams(updatedItem));
  }

  return (
    <div className=" mt-2 ml-[-3px] ">
      {clearItems.map(([key, item], i) => (
        <div
          className="shadow-filter-clear bg-textbox-gray inline-block text-[11px] rounded-[3px] my-0.5 mx-1 px-2 py-[5.5px] cursor-pointer tracking-wide max-w-[200px] overflow-hidden group"
          onClick={() => handleClick(item)}
          key={i}
        >
          <span className="text-[15px]">&times;</span>
          <span className="ml-2 group-hover:line-through">
            {key === "ram" && <RamTag item={item} />}
            {key === "customer ratings" && <RatingTag item={item} />}
            {key === "discount" && <DiscountTag item={item} />}
            {key === "brand" && item}
            {key === "price" && <PriceTag item={item} />}
          </span>
        </div>
      ))}
    </div>
  );
}

export default FilterTag;
