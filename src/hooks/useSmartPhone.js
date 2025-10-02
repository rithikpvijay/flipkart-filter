import { useEffect, useState } from "react";

function useSmartPhone() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/mobiles.json");

        if (!res.ok) throw new Error("Something went wrong with fetching nav");
        const data = await res.json();

        setData(data.products.productItems);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);
  return { data };
}

export default useSmartPhone;
