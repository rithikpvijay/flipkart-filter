import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import RamItems from "./RamItems";
import RatingItems from "./RatingItems";
import DiscountItems from "./DiscountItems";
import BrandItems from "./BrandItems";

function DisplayItem({ item, title, query }) {
  const [isChecked, setIschecked] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();

  function handleCheck(e) {
    setIschecked((check) => !check);
    const selected = searchParam.getAll(title);

    const updated = selected.includes(e.target.value)
      ? selected.filter((param) => param !== e.target.value)
      : [...selected, e.target.value];

    const entries = [...searchParam.entries()].filter(
      ([key]) => key !== title && key !== "page"
    );

    entries.push(["page", 1]);

    updated.forEach((param) => entries.push([title, param]));
    setSearchParam(new URLSearchParams(entries));
  }

  return (
    <div className="flex items-center gap-2.5 py-1.5 last:mb-6" key={item}>
      <input
        id={`${title}${item}`}
        type="checkbox"
        value={item}
        className="h-4 w-3.5 cursor-pointer"
        checked={searchParam.getAll(title).includes(String(item))} // for comparing numbers (ram)
        onChange={handleCheck}
      />
      <label htmlFor={`${title}${item}`} className="text-[13px] cursor-pointer">
        <BrandItems title={title} item={item} />
        <RamItems title={title} item={item} />
        <RatingItems title={title} item={item} />
        <DiscountItems title={title} item={item} />
      </label>
    </div>
  );
}

export default DisplayItem;
