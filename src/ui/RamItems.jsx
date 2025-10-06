function RamItems({ title, item }) {
  if (title !== "ram") return null;
  return (
    <div>
      {item} GB {`${item <= 1 ? "and below" : ""}`}
    </div>
  );
}

export default RamItems;
