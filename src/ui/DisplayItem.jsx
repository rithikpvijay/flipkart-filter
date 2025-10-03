import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function DisplayItem({ item, title, query }) {
  const [isChecked, setIschecked] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();

  function handleCheck(e) {
    setIschecked((check) => !check);
    const selected = searchParam.getAll(title);

    const updated = selected.includes(e.target.id)
      ? selected.filter((param) => param !== e.target.id)
      : [...selected, e.target.id];

    const entries = [...searchParam.entries()].filter(([key]) => key !== title);

    updated.forEach((param) => entries.push([title, param]));
    setSearchParam(new URLSearchParams(entries));
  }
  return (
    <div className="flex items-center gap-2.5 py-1.5 last:mb-6" key={item}>
      <input
        id={item}
        type="checkbox"
        className="h-4 w-3.5 cursor-pointer"
        checked={searchParam.getAll(title).includes(String(item))} // for comparing numbers (ram)
        onChange={handleCheck}
      />
      <label htmlFor={item} className="text-[13px] cursor-pointer">
        {item} {typeof item === "number" ? "GB" : ""}
      </label>
    </div>
  );
}

export default DisplayItem;
