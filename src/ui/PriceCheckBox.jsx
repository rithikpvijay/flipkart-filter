import { MdOutlineArrowDropDown } from "react-icons/md";

function PriceCheckBox({ value, onMin, onMax }) {
  let [minValue, maxValue] = value;

  return (
    <div className="flex justify-between items-center mt-2">
      <div className="relative">
        <select
          value={minValue}
          onChange={onMin}
          className="border border-textbox-gray rouded-[1px] appearance-none outline-0 h-6 text-[13px] text-black-text px-[5px] w-23 z-10"
        >
          <option value="0">Min</option>
          <option value="10000" hidden={maxValue < 15000}>
            ₹10000
          </option>
          <option value="15000" hidden={maxValue < 20000}>
            ₹15000
          </option>
          <option value="20000" hidden={maxValue < 25000}>
            ₹20000
          </option>
          <option value="25000" hidden={maxValue < 30000}>
            ₹25000
          </option>
        </select>

        <MdOutlineArrowDropDown className="h-6 w-6 absolute right-0.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      </div>
      <span className="text-[13px] text-grey-strike">to</span>

      <div className="relative">
        <select
          value={maxValue}
          onChange={onMax}
          className="border border-textbox-gray rouded-[1px] appearance-none outline-0 h-6 text-[13px] text-black-text px-[5px] w-23 z-10"
        >
          <option value="10000" hidden={minValue > 5000}>
            ₹10000
          </option>
          <option value="15000" hidden={minValue > 10000}>
            ₹15000
          </option>
          <option value="20000" hidden={minValue > 15000}>
            ₹20000
          </option>
          <option value="25000" hidden={minValue > 20000}>
            ₹25000
          </option>
          <option value="30000">₹30000+</option>
        </select>
        <MdOutlineArrowDropDown className="h-6 w-6 absolute right-0.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}

export default PriceCheckBox;
