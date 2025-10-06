function getFilteredDiscount(selectedDiscounts, data) {
  if (!selectedDiscounts.length) return data;
  return data.filter((data) =>
    selectedDiscounts.some(
      (discount) =>
        Math.round(((data.mrp - data.price) / data.mrp) * 100) >= discount
    )
  );
}

export default getFilteredDiscount;
