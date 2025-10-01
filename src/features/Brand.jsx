import { useState } from "react";
import getSmartPhone from "../hooks/getSmartPhone";

import Displayfeature from "../ui/Displayfeature";

function Brand() {
  const [isExpand, setISExpand] = useState(false);
  const { data } = getSmartPhone();
  if (!data) return null;

  const { productItems } = data.products;
  const uniqueProducts = productItems.filter(
    (item, index, arr) =>
      index === arr.findIndex((product) => product.brand === item.brand)
  );

  const brands = uniqueProducts.map((product) => product.brand);

  function handleExpand() {
    setISExpand((exp) => !exp);
  }

  return (
    <Displayfeature
      handleClick={handleExpand}
      isExpand={isExpand}
      items={brands}
      searchBar={true}
    />
  );
}
export default Brand;
