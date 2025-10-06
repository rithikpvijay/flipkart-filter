function PriceTag({ item }) {
  const [min, max] = item.split(",");

  console.log(min, max);

  return (
    <span>
      {Number(min) === 0 ? "Min" : `₹${min}`}-₹
      {Number(max) === 30000 ? "30000+" : max}
    </span>
  );
}

export default PriceTag;
