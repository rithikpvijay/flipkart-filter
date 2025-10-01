import { useEffect, useState } from "react";

function GetSmartPhone() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/mobiles.json");

        if (!res.ok) throw new Error("Something went wrong with fetching nav");
        const data = await res.json();

        setData(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);
  return { data };
}

export default GetSmartPhone;
