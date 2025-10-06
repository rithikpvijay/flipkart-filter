function BrandItems({ title, item }) {
  if (title !== "brand") return null;
  return <div>{item}</div>;
}

export default BrandItems;
