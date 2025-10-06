function DiscountItems({ title, item }) {
  if (title !== "discount") return null;
  return <div>{item}% or more</div>;
}

export default DiscountItems;
