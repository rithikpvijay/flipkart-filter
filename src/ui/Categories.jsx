import { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    async function fetchCategory() {
      try {
        const res = await fetch("/mobiles.json");
        if (!res.ok)
          throw new Error("Something went wrong while fetching categories");
        const data = await res.json();

        setCategories(data.categoriesTab);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchCategory();
  }, []);

  if (!categories) return null;

  const { items, downArrow } = categories;

  return (
    <div className="shadow-catogery-box">
      <div className="flex h-[40px] max-w-[1200px] mx-auto justify-between">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center group gap-2 cursor-pointer hover:text-brand-blue transition"
          >
            <span className="font-semibold text-[13px] ">{item} </span>
            {i !== items.length - 1 && i != items.length - 2 ? (
              <img
                src={`src/${downArrow}`}
                alt="down arrow icon"
                className="h-[8px] w-[4.7px] rotate-270  group-hover:rotate-90 transition-transform duration-100 group-hover:text-amber-300"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
