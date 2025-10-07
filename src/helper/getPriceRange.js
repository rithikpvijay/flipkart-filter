function getPriceRange(selectedPriceRange, data) {
  if (!selectedPriceRange) return data;
  let [min, max] = selectedPriceRange.split(",");
  if (max === "30000") max = 10000000;
  return data.filter((item) => min <= item.price && max >= item.price);
}

export default getPriceRange;
