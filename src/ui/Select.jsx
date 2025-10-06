import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

function Select({ options }) {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const min = searchParams.get("min");
  const max = searchParams.get("max");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="relative">
      <select
        value={min ? min : value}
        onChange={handleChange}
        className="border border-textbox-gray rouded-[1px] appearance-none outline-0 h-6 text-[13px] text-black-text px-[5px] w-23 z-10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <MdOutlineArrowDropDown className="h-6 w-6 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
    </div>
  );
}

export default Select;
