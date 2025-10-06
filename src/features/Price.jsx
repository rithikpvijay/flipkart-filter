import { useEffect, useState } from "react";
import Displayfeature from "../ui/Displayfeature";
import PriceBox from "../ui/PriceBox";
import PriceCheckBox from "../ui/PriceCheckBox";
import PriceDot from "../ui/PriceDot";
import RangeSlider from "./Slider";
import { useSearchParams } from "react-router-dom";

function Price() {
  const minDistance = 5000;
  const [value, setValue] = useState([0, 30000]);

  const [searchParams, setSearchParams] = useSearchParams();

  const price = searchParams.get("price");

  useEffect(() => {
    if (price?.length) {
      console.log(searchParams.get("price"));
      const [min, max] = searchParams.get("price").split(",");
      console.log(min, max);
      setValue([Number(min), Number(max)]);
    }
    if (!price) {
      setValue([0, 30000]);
    }
  }, [price, searchParams]);

  function handleClick() {
    const updateParam = [...searchParams.entries()].filter(
      ([key]) => key !== "price"
    );
    setSearchParams(new URLSearchParams(updateParam));
  }

  const handleChange = (event, newValue, activeThumb) => {
    let updatedValue;
    if (activeThumb === 0) {
      updatedValue = [Math.min(newValue[0], value[1] - minDistance), value[1]];
    } else {
      updatedValue = [value[0], Math.max(newValue[1], value[0] + minDistance)];
    }

    if (updatedValue[0] === 5000) updatedValue[0] = 0;

    setValue(updatedValue);

    // searchParams.set("max", updatedValue[1]);
    searchParams.set("price", updatedValue);
    setSearchParams(searchParams);
  };

  function handleMinChange(e) {
    const price = searchParams.get("price");
    let max;
    let updateValue;
    if (price) {
      max = price.split(",")[1];
    }
    console.log(max);

    updateValue = [e.target.value, max ? max : 30000];
    setValue(updateValue);
    searchParams.set("price", updateValue);
    setSearchParams(searchParams);
  }

  function handleMaxChange(e) {
    const price = searchParams.get("price");
    let min;
    let updateValue;
    if (price) {
      [min] = price.split(",");
    }

    updateValue = [min ? min : 0, e.target.value];
    setValue(updateValue);
    searchParams.set("price", updateValue);
    setSearchParams(searchParams);
  }

  return (
    <div className="p-4 border-b border-border-grey relative">
      <div className="flex items-center justify-between">
        <div className=" text-[12px] uppercase font-semibold">Price</div>
        <div
          className={`cursor-pointer text-brand-blue text-[11px] uppercase font-semibold ${
            !price ? "hidden" : ""
          }`}
          onClick={handleClick}
        >
          <span>Clear</span>
        </div>
      </div>
      <div className="absolute top-[42px]">
        <PriceBox />
      </div>

      <div className="mt-5">
        <RangeSlider value={value} onChange={handleChange} />
      </div>
      <div className="absolute top-[64px]">
        <PriceDot />
      </div>
      <PriceCheckBox
        value={value}
        onMin={handleMinChange}
        onMax={handleMaxChange}
      />
    </div>
  );
}

export default Price;
