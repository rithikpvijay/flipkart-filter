function getFilteredBrand(selectedBrands, data) {
  if (!selectedBrands.length) return data;
  return data.filter((data) => selectedBrands.includes(data.brand));
}

export default getFilteredBrand;
