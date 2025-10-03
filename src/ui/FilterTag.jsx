import { useSearchParams } from "react-router-dom";

function FilterClear() {
  const [searchParam, setSearchParam] = useSearchParams();

  console.log([...searchParam.entries()]);

  const clearItems = [...searchParam.entries()].filter(
    ([key]) => key !== "sort"
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
      {clearItems.map(([_, item], i) => (
        <div
          className="shadow-text-box bg-textbox-gray inline-block text-[11px] rounded-[3px] my-0.5 mx-1 px-2 py-[5.5px] cursor-pointer tracking-wide max-w-[200px] overflow-hidden group"
          onClick={() => handleClick(item)}
          key={i}
        >
          <span className="text-[15px]">&times;</span>
          <span className="ml-2 group-hover:line-through">
            {item} {isNaN(Number(item)) ? "" : "GB"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default FilterClear;
