function getDiscount(data) {
  return data.map((item) =>
    Math.round(((item.mrp - item.price) / item.mrp) * 100)
  );
}

export default getDiscount;
