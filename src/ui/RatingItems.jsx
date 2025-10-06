function RatingItems({ title, item }) {
  if (title !== "customer ratings") return null;
  return <div>{item} ★ & above</div>;
}

export default RatingItems;
