function DisplayItem({ item }) {
  return (
    <div className="flex items-center gap-2.5 py-1.5 " key={item}>
      <input id={item} type="checkbox" className="h-4 w-3.5 cursor-pointer" />
      <label htmlFor={item} className="text-[13px] cursor-pointer">
        {item}
      </label>
    </div>
  );
}

export default DisplayItem;
